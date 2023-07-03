// 地址模糊搜索
function locationSearch(data){
    const unitList = ['省','自治区','特别行政区','市','自治州','盟','自治县','县','自治旗','旗','地区','矿区','林区','特区','区'];
    const peopleList = ['汉族','壮族','蒙古族','回族','藏族','维吾尔族','苗族','彝族','布依族','朝鲜族','满族','侗族','瑶族','白族','东乡族','锡伯族','土家族','哈尼族','哈萨克族','傣族','黎族','僳僳族','佤族','畲族','拉祜族','水族','纳西族','景颇族','柯尔克孜族','土族','高山族','达斡尔族','仫佬族','羌族','撒拉族','德昂族','仡佬族','阿昌族','普米族','布朗族','塔吉克族','怒族','乌孜别克族','俄罗斯族','鄂温克族','毛南族','保安族','裕固族','京族','塔塔尔族','独龙族','鄂伦春族','赫哲族','门巴族','珞巴族','基诺族'];
    var hash = {};
    var map = {};
    for(var key in data){
        hash[key] = data[key];
        if(hash[key].indexOf('新区')==-1){
            unitList.forEach(function(unit){
                if(hash[key].lastIndexOf(unit)==hash[key].length-unit.length){
                    if(hash[key].length-unit.length>=2){
                        hash[key] = hash[key].replace(unit,'');
                    }
                }
            });
        }
        peopleList.forEach(function(people){
            if(hash[key].indexOf('族')){
                if(hash[key].length-people.length>=2){
                    hash[key] = hash[key].replace(people,'');
                }
            }
        });
    }
    var provinceName = '';
    var cityName = '';
    for(var key in hash){
        if(key.match(/0000$/)){
            map[key] = hash[key];
        }else if(key.match(/00$/)){
            provinceName = hash[key.replace(/\d{4}$/,'0000')]||'';
            map[key] = provinceName+hash[key]+provinceName;
        }else{
            provinceName = hash[key.replace(/\d{4}$/,'0000')]||'';
            cityName = hash[key.replace(/\d{2}$/,'00')]||'';
            map[key] = provinceName+hash[key]+cityName+provinceName+hash[key]+'|'+cityName+hash[key]+provinceName+cityName+hash[key];
        }
    }
    this.query = function(keyword){
        var temp = {};
        keyword = keyword.trim().replace(/[\s\#\-\/\.]+/g,'|');
        if(keyword.length>3){
            unitList.forEach(function(unit){
                for(var i=0;i<2;i++){
                    var temp = '|'+keyword.replace(unit,'|');
                    if(!temp.match(/\|\S{0,1}\|/)){
                        keyword = keyword.replace(unit,'|');
                    }
                }
            });
            peopleList.forEach(function(people){
                for(var i=0;i<2;i++){
                    var temp = '|'+keyword.replace(peopleList,'');
                    if(!temp.match(/\|\S{0,1}\|/)){
                        keyword = keyword.replace(peopleList,'');
                    }
                }
            });
            keyword = keyword.replace(/\|/g,'');
            for(var key in map){
                if(map[key].indexOf(keyword)>-1){
                    temp[key] = true;
                }
            }
        }else{
            for(var key in map){
                if(data[key].indexOf(keyword)>-1){
                    temp[key] = true;
                }
            }
        }
        var result = [];
        for(var key in temp){
            if(key.match(/0000$/)){
                result.push({
                    'value':key,
                    'name':data[key]
                });
            }else if(key.match(/00$/)){
                if(!temp[key.replace(/\d{4}$/,'0000')]){
                    result.push({
                        'value':key,
                        'name':data[key.replace(/\d{4}$/,'0000')]+data[key]
                    });
                }
            }else{
                if(!temp[key.replace(/\d{4}$/,'0000')]&&!temp[key.replace(/\d{2}$/,'00')]){
                    result.push({
                        'value':key,
                        'name':data[key.replace(/\d{4}$/,'0000')]+(data[key.replace(/\d{2}$/,'00')]||'')+data[key]
                    });
                }
            }
        }
        return result;
    };
}
