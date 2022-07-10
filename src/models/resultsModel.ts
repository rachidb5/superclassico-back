import { Schema, model } from 'mongoose';

interface IResult {
    date: Date;
    partidas: object;
    gols: object;
  }

const resultsSchema = new Schema<IResult>({
    date: { type: Date },
    partidas: { type: Object },
    gols: {type: Object}
}, { versionKey: false });

const resultsModel = model<IResult>('results', resultsSchema);

function results(body): void {
    this.body = body;
    this.errors = [];
    this.users = null;
}


results.findAll = async (): Promise<IResult[]> => {
    const resultados = await resultsModel.find();
    return resultados;
};

results.prototype.register = async function(): Promise<void> {
    this.results = await resultsModel.create(this.body)
}
module.exports = results;