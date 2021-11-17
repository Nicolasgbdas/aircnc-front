import app from "./app";

app.listen(app.get('port'), () => {
    console.log('Express na porta', app.get('port'));
    console.log('Express no modo:', app.get('env'));
});
































//const u1 = await UsuarioRespositorio.usuarioRepositorio.criarU({ nome: 'Nicolas', genero: 'Masculino', dataNasc: new Date("March 19, 1997 09:30:35"), email: 'nicolas123@gmail.com', telefone: '32614180', documento: 85918854425, endereco: 'Alameda z, rua G, n225', contatoEmerg: 32654444 })
        //const b1 = await UsuarioRespositorio.usuarioRepositorio.buscarU();
        //console.log(b1);

/*const I1 = await imovelRepositorio.criarI({
            preco: 2500,
            tipoDeImovel: 'Apartamento',
            comodos: 6,
            banheiros: 2,
            disponibilidade: true,
            endereco: 'empire state building',
            comodidades: {
                arCond: true, wifi: true,
                cozinha: true,
                garagem: true
            },
            seguranca: {
                detecFumaça: true,
                extintorIncend: true,
                cameras: true,
                alarmcorbono: true
            },
            andar: 5,
            elevador: true,
            txServico: 200,
            txLimpeza: 200
        })
        console.log(I1);
        const I2 = await imovelRepositorio.criarI({
            preco: 150,
            tipoDeImovel: 'Quarto',
            banheiros: 1,
            disponibilidade: true,
            endereco: 'beco da paixão, alameda S, casa 2',
            comodidades: {
                arCond: true, wifi: true,
                cozinha: true,
                garagem: false
            },
            seguranca: {
                detecFumaça: false,
                extintorIncend: false,
                cameras: false,
                alarmcorbono: false
            },
            txServico: 200,
            txLimpeza: 200
        })
        console.log(I2);
        const I3 = await imovelRepositorio.criarI({
            preco: 3000,
            tipoDeImovel: 'Casa',
            comodos: 6,
            banheiros: 2,
            disponibilidade: true,
            endereco: 'Alameda DBZ, casa 222',
            comodidades: {
                arCond: true, wifi: true,
                cozinha: true,
                garagem: true
            },
            seguranca: {
                detecFumaça: false,
                extintorIncend: true,
                cameras: true,
                alarmcorbono: true
            },
            txServico: 200,
            txLimpeza: 200
        })
        console.log(I3);
        */