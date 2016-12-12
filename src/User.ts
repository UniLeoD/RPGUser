class User {
    cash = 0;
    gold = 0;
    exp = 0;
    totalExp = 0;
    level = 0;
    heroes: Hero[] = [];
    _heroesInTeam: Hero[] = [];
    // pet: Pet;


    constructor() {
        // this.pet = new Pet();
        this.level = 1;
    }

    get heroesInTeam() {
        return this.heroes.filter(hero => hero.isInTeam);
    }
   // @Logger
  //  print() {
   //     console.log("hello world");
   // }
   // @Cache
    getFightPower() {
        var result = 0;
        this.heroesInTeam.forEach(hero => result += hero.getFightPower());
        // result += this.pet.getFightPower();
        return result + this.level * 2;
    }

}


class Hero {
    heroName: string;
    isInTeam: boolean = false;
    equipments: Equipment[] = [];
    quality: number = 2.8;
    hp = 50;
    level = 1;

    constructor(heroName: string, isInTeam: boolean) {
        this.heroName = heroName;
        this.isInTeam = isInTeam;
    }
    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 0;
        this.equipments.forEach(e => result = +e.attack);
        return result;
    }

    getFightPower() {
        return this.getFightPower();
        //return this.maxHp*1.5+this.attack*1.8;
    }
}


class Equipment {
    equipmentName: string;
    jewels: Jewel[] = [];
    equipmentAtk: number;
    constructor(equipmentName: string, equipmentAtk: number) {
        this.equipmentName = equipmentName;
        this.equipmentAtk = equipmentAtk;
    }


    get attack() {
        var jewelAffect: number;
        for (var i = 0; i < this.jewels.length; i++) {
            jewelAffect = this.jewels[i].attack;
        }
        return this.equipmentAtk + jewelAffect;
    }
}


class Jewel {
    jewelName: string;
    jewelAtk: number;

    constructor(jewelName: string, jewelAtk: number) {
        this.jewelName = jewelName;
        this.jewelAtk = jewelAtk;
    }

    get attack() {
        return this.jewelAtk;
    }
}

/*
class Pet {
   petName:string;
    getFightPower() {
        return 20;
    }

}
*/

var Logger: MethodDecorator = (target: any, propertyKey, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function (...arg) {
        console.log(111);
        return method.apply(this, arg);
    }
}

var Cache: MethodDecorator = (target: any, porpertyKey, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function (...arg) {
        console.log(target, porpertyKey)

        var cacheKey = "__cache" + porpertyKey;
        if (!target[cacheKey]) {
            target[cacheKey] == method.apply(this, arg);
        }
        return target[cacheKey];
    }
}
