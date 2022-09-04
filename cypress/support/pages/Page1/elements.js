//elementos da página para eecutar as açaões

export const ELEMENTS = {

    //Elementos -> paginacaoTable()
    colunaNome: 'table >tbody >tr',
    primeiraColuna: 'table >tbody >tr td:nth-child(1)',
    buttonPaginacao: '.ant-table-pagination',
    pageAnterior: '.ant-pagination-prev',

    //Elementos -> visualizarProximaPagina()
    segundaPagina: '.ant-pagination-item-2',
    proximaPagina: '.ant-pagination-next',
    retornarPagAnterior: '.ant-pagination-prev > .ant-pagination-item-link',
    primeiraPagina: '.ant-pagination-item-1',

    //Elementos -> ordenarDados()
    ordemDecre: '.anticon-caret-up > svg',
    ordemCresc: '.anticon-caret-down > svg',

    //Elementos -> verificarParametroTabela()
    segundaColuna: 'table >tbody>tr td:nth-child(2)'




}