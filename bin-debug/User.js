var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.totalExp = 0;
        this.level = 0;
        this.heroes = [];
        this._heroesInTeam = [];
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.map(function (hero) { return result += hero.getFightPower(); });
        result += this.pet.getFightPower();
        return result;
    };
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero() {
        this.isInTeam = false;
        this.equipments = [];
        this.quality = 2.8;
        this.hp = 50;
        this.level = 1;
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
    function Equipment() {
        this.jewels = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            return 50;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewel = (function () {
    function Jewel() {
    }
    var d = __define,c=Jewel,p=c.prototype;
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Pet = (function () {
    function Pet() {
    }
    var d = __define,c=Pet,p=c.prototype;
    p.getFightPower = function () {
        return 20;
    };
    return Pet;
}());
egret.registerClass(Pet,'Pet');
//# sourceMappingURL=User.js.map