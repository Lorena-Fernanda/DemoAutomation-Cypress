//elementos da página para eecutar as açaões

export const ELEMENTS = {

    //Elementos -> verificarElRadio()
    radioButtons: ':nth-child(1) > .ant-col-14 > .ant-form-item-control',
    vertical: '.ant-radio-group > :nth-child(2)',
    horizontal: '.ant-radio-group > :nth-child(1)',
    inLine: '.ant-radio-group > :nth-child(3)',

    //Elementos -> verificarElementoSelect()
    select: ':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder',
    selectDados: ':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection',
    lista: '[role="listbox"]',
    busca: '.ant-select-search__field',
    close: '[data-icon="close-circle"]',

    //Elementos ->  verificaElementoInput()
    input: '.ant-input-affix-wrapper > .ant-input',
    closeInput: '.ant-input-suffix > .anticon > svg',

    //Elementos -> verificarElementoTreeSelect()
    treeSelect: ':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection',
    listaTreeSelec: '.ant-select-tree-switcher > .anticon > svg',
    subLista: 'span[title="Green"]',
    treeSelectPrenchido: ':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered',

    //Elementos -> verificarElementoCascade()
    cascade: '.ant-cascader-picker > .ant-input',
    listaCascade: '.ant-cascader-menu-item',
    itemLista: '[title="Campinas"]',

    //Elementos -> verificarElementoDataPiker()
    calendar: '.ant-calendar-picker-input',
    ultimoDiaMes: '.ant-calendar-last-day-of-month > .ant-calendar-date',

    //Elementos -> executarAcoesDataPiker()
    iconeAnoAnterior: '.ant-calendar-prev-year-btn',
    iconeMesAnterior: '.ant-calendar-prev-month-btn',
    iconeProximoMes: '.ant-calendar-next-month-btn',
    iconeProximoAno: '.ant-calendar-next-year-btn',
    labelMes: '.ant-calendar-month-select',
    mes: '[title="Oct"]',
    labelAno: '.ant-calendar-year-select',
    ano: '[title="2026"]',
    niver: '[title="October 24, 2026"]',

    //Elementos -> verificarAcaoToday()
    today: '.ant-calendar-footer-btn',

    //Elementos -> verificarValorMaximoSlider()
    slider: '.ant-slider',
    inputSlider: '.ant-input-number-input',
    valorInput: '.ant-slider-handle',

    //Elementos -> verificarElementoTextArea()
    textArea: '.ant-form-item-children > .ant-input'



}