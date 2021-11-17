export interface Usuario {
    nome: string,
    genero: string,
    dataNasc: Date,
    email: string,
    telefone: string,
    documento: number,
    endereco: string,
    contatoEmerg: number;
}

/*export abstract class usuario {
    protected nome: string;
    protected genero: string;
    protected dataNasc: Date;
    protected email: string;
    protected telefone: number;
    protected documento: number;
    protected endereco: string;
    protected contatoEmerg: number;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getDataNasc(): Date {
        return this.dataNasc;
    }

    public setDataNasc(dataNasc: Date): void {
        this.dataNasc = dataNasc;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getTelefone(): number {
        return this.telefone;
    }

    public setTelefone(telefone: number): void {
        this.telefone = telefone;
    }

    public getDocumento(): number {
        return this.documento;
    }

    public setDocumento(documento: number): void {
        this.documento = documento;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public getContatoEmerg(): number {
        return this.contatoEmerg;
    }

    public setContatoEmerg(contatoEmerg: number): void {
        this.contatoEmerg = contatoEmerg;
    }




    constructor(nome: string, genero:string, dataNasc: Date, email: string, telefone: number, documento: number, endereco: string, contatoEmerg: number){
        this.nome = nome;
        this.genero = genero;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefone = telefone;
        this.documento = documento;
        this.endereco = endereco;
        this.contatoEmerg = contatoEmerg;
    }
};
*/
