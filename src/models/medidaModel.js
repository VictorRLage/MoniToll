var database = require("../database/config");

function buscarUltimasMedidas(fkVoto, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        temperatura, 
                        umidade, 
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select votos.voto, count(usuario.id) qtd_pessoas from usuario join votos on usuario.fkVoto = votos.id group by votos.voto;`;

    } /* else  if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select votos.voto, count(usuario.id) from usuario join votos on usuario.fkVoto = votos.id group by votos.voto;` */
    else {

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkTorre, fkComponente) {

    instrucaoSql = ''

    instrucaoSql = `select top 1 Leitura,DataHora as 'momento_grafico' from Leitura where fkTorre = ${fkTorre} and fkComponente = ${fkComponente} ORDER BY idLeitura DESC`;



    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDataHora(fkTorre, fkComponente) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 DataHora from Leitura where fkTorre = ${fkTorre} and fkComponente = ${fkComponente} ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorcentagemCPU(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'PorcentagemUsoCPU' from Leitura where fkTorre = ${fkTorre} and fkComponente = 2 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarPorcentagemRAM(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'PorcentagemUsoRam' from Leitura where fkTorre = ${fkTorre} and fkComponente = 5 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorcentagemDisco(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'PorcentagemUsoDisco' from Leitura where fkTorre = ${fkTorre} and fkComponente = 9 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorcentagemPercaPacotes(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'PorcentagemPercaPacotes' from Leitura where fkTorre = ${fkTorre} and fkComponente = 12 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRegistro(fkTorre, nmrComponentes) {

    instrucaoSql = ''

    instrucaoSql = `select top ${nmrComponentes} * from Leitura where fkTorre = ${fkTorre} ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarProc(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select idProcessoDinamica as 'idProcesso', Nome, Pid, StatusP as 'Status', usoCPU, usoRAM, DataCriacao as 'Data de criação', fkTorre as 'Servidor' from ProcessoDinamica where fkTorre = ${fkTorre}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetrica(fkEmpresa, nmrComponente) {

    instrucaoSql = ''

    instrucaoSql = `select * from  luigi_Metricas where fkComponente = ${nmrComponente} and fkEmpresa = ${fkEmpresa}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTemperatura(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'Temperatura' from Leitura where fkTorre = ${fkTorre} and fkComponente = 22 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPlacaMae(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'Placa_mae' from Leitura where fkTorre = ${fkTorre} and fkComponente = 23 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDesempenho(fkTorre) {

    instrucaoSql = ''

    instrucaoSql = `select top 7 Leitura as 'Desempenho' from Leitura where fkTorre = ${fkTorre} and fkComponente = 24 ORDER BY idLeitura DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHorarioPico(nomeEmp2) {
    
    instrucaoSql = ''
    
    instrucaoSql = `SELECT fkTorre, COUNT(idAlerta) AS Quantidade,nomeEmp, FORMAT(max(DataHora), 'dd-MM-yyyy') AS Dia,FORMAT(DATEADD (HOUR, -3 , DataHora), 'HH:00') AS DataHora FROM AlertaRenato WHERE fkTorre = ${nomeEmp2} GROUP BY fkTorre, nomeEmp,FORMAT(DATEADD (HOUR, -3 , DataHora), 'HH:00')
    UNION
    SELECT TOP 1 t.* FROM (SELECT fkTorre, COUNT(idAlerta) AS Quantidade,nomeEmp, FORMAT(max(DataHora), 'dd-MM-yyyy') AS Dia,FORMAT(DATEADD (HOUR, -3 , DataHora), 'HH:00') AS DataHora FROM AlertaRenato WHERE fkTorre = ${nomeEmp2} GROUP BY fkTorre, nomeEmp,FORMAT(DATEADD (HOUR, -3 , DataHora), 'HH:00')) t
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHorarioCHC(componente) {
    
    instrucaoSql = ''
    
    instrucaoSql = `SELECT TOP 4 t.* FROM (SELECT DISTINCT(componente)  as Componente, fkTorre,COUNT(componente) AS Quantidade2 FROM AlertaRenato WHERE fkTorre = ${componente} GROUP BY fkTorre, componente) t
    `;
        
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDia(hoje) {
    
    instrucaoSql = ''
    
    instrucaoSql = `SELECT TOP 1 t.* FROM (SELECT FORMAT(max(DataHora), 'dd-MM-yyyy') AS Dia,FORMAT(DATEADD (HOUR, -3 , DataHora), 'HH:00') AS Hora FROM AlertaRenato WHERE fkTorre = ${hoje} GROUP BY FORMAT(DATEADD (HOUR, -3 , DataHora), 'HH:00')) t`;
        
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
    buscarHorarioCHC,
    buscarDia
}
