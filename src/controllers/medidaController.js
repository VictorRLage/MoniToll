var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {

    var fkTorre = req.params.fkTorre;
    var fkComponente = req.params.fkComponente;


    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(fkTorre, fkComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDataHora(req, res) {

    var fkTorre = req.params.fkTorre;
    var fkComponente = req.params.fkComponente;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDataHora(fkTorre, fkComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar DataHora.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPorcentagemCPU(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarPorcentagemCPU(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPorcentagemRAM(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarPorcentagemRAM(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem RAM.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPorcentagemDisco(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarPorcentagemDisco(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPorcentagemPercaPacotes(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarPorcentagemPercaPacotes(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistro(req, res) {

    var fkTorre = req.params.fkTorre;
    var nmrComponentes = req.params.nmrComponentes;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarRegistro(fkTorre, nmrComponentes).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar registros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarProc(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarProc(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMetrica(req, res) {

    var fkEmpresa = req.params.fkEmpresa;
    var nmrComponente = req.params.nmrComponente;

    if (fkEmpresa.length < 1){
        res.status(300).send("Sem fkEmpresa!")
    }
    if (nmrComponente.length < 1){
        res.status(300).send("Sem nmrComponentes!")
    }

    medidaModel.buscarMetrica(fkEmpresa, nmrComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(500).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTemperatura(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTemperatura(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPlacaMae(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarPlacaMae(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDesempenho(req, res) {

    var fkTorre = req.params.fkTorre;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDesempenho(fkTorre).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar porcentagem perca pacotes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarHorarioPico(req, res) {

    var nomeEmp2 = req.params.nomeEmp;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarHorarioPico(nomeEmp2).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar registros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarHorarioCHC(req, res) {

    var componente = req.params.componente;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarHorarioCHC(componente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar registros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarPorcentagemCPU,
    buscarPorcentagemRAM,
    buscarPorcentagemDisco,
    buscarPorcentagemPercaPacotes,
    buscarDataHora,
    buscarRegistro,
    buscarProc,
    buscarMetrica,
    buscarTemperatura,
    buscarPlacaMae,
    buscarDesempenho,
    buscarHorarioPico,
    buscarHorarioCHC

}