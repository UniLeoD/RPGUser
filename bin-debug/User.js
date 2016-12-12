var User = (function () {
    // pet: Pet;
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.totalExp = 0;
        this.level = 0;
        this.heroes = [];
        this._heroesInTeam = [];
        // this.pet = new Pet();
        this.level = 1;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    // @Logger
    //  print() {
    //     console.log("hello world");
    // }
    // @Cache
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.forEach(function (hero) { return result += hero.getFightPower(); });
        // result += this.pet.getFightPower();
        return result + this.level * 2;
    };
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(heroName, isInTeam) {
        this.isInTeam = false;
        this.equipments = [];
        this.quality = 2.8;
        this.hp = 50;
        this.level = 1;
        this.heroName = heroName;
        this.isInTeam = isInTeam;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result = +e.attack; });
            return result;
        }
    );
    p.getFightPower = function () {
        return this.getFightPower();
        //return this.maxHp*1.5+this.attack*1.8;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment(equipmentName, equipmentAtk) {
        this.jewels = [];
        this.equipmentName = equipmentName;
        this.equipmentAtk = equipmentAtk;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            var jewelAffect;
            for (var i = 0; i < this.jewels.length; i++) {
                jewelAffect = this.jewels[i].attack;
            }
            return this.equipmentAtk + jewelAffect;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewel = (function () {
    function Jewel(jewelName, jewelAtk) {
        this.jewelName = jewelName;
        this.jewelAtk = jewelAtk;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.jewelAtk;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
/*
class Pet {
   petName:string;
    getFightPower() {
        return 20;
    }

}
*/
var Logger = function (target, propertyKey, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        console.log(111);
        return method.apply(this, arg);
    };
};
var Cache = function (target, porpertyKey, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        console.log(target, porpertyKey);
        var cacheKey = "__cache" + porpertyKey;
        if (!target[cacheKey]) {
            target[cacheKey] == method.apply(this, arg);
        }
        return target[cacheKey];
    };
};
