export class Personality{
    constructor(name, biography, importance){
        this.name = name;
        this.biography = biography;
        this.importance = importance
    }
}

export class Knowledge{
    constructor(civilization, description){
        this.civilization = civilization;
        this.description = description;
        this.contribution = [];
    }
}

export class Religion{
    constructor(name, origin, description, importance){
        this.name = name;
        this.origin = origin;
        this.description = description;
        this.importance = importance;
        this.prejudices = [];
        this.explantion = [];
    }
}