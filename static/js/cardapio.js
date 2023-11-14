$(document).ready(() => {
    //Selecionar os elementos
    const $decrementButtonMargherita = $("#decrementButton-margherita");
    const $incrementButtonMargherita = $("#incrementButton-margherita");
    const $counterMargherita = $("#counter-margherita");
    const $sumMargherita = $("#sum-margherita");

    const $decrementButtonNapolitana = $("#decrementButton-napolitana");
    const $incrementButtonNapolitana = $("#incrementButton-napolitana");
    const $counterNapolitana = $("#counter-napolitana");
    const $sumNapolitana = $("#sum-napolitana");

    const $decrementButtonQueijos = $("#decrementButton-queijos");
    const $incrementButtonQueijos = $("#incrementButton-queijos");
    const $counterQueijos = $("#counter-queijos");
    const $sumQueijos = $("#sum-queijos");

    const $decrementButtonPepperoni = $("#decrementButton-pepperoni");
    const $incrementButtonPepperoni = $("#incrementButton-pepperoni");
    const $counterPepperoni = $("#counter-pepperoni");
    const $sumPepperoni = $("#sum-pepperoni");

    const $decrementButtonCalabresa = $("#decrementButton-calabresa");
    const $incrementButtonCalabresa= $("#incrementButton-calabresa");
    const $counterCalabresa = $("#counter-calabresa");
    const $sumCalabresa = $("#sum-calabresa");

    const $decrementButtonFunghi = $("#decrementButton-funghi");
    const $incrementButtonFunghi = $("#incrementButton-funghi");
    const $counterFunghi = $("#counter-funghi");
    const $sumFunghi = $("#sum-funghi");

    const $decrementButtonVinho = $("#decrementButton-vinho");
    const $incrementButtonVinho = $("#incrementButton-vinho");
    const $counterVinho = $("#counter-vinho");
    const $sumVinho= $("#sum-vinho");

    const $decrementButtonAperol = $("#decrementButton-aperol");
    const $incrementButtonAperol = $("#incrementButton-aperol");
    const $counterAperol = $("#counter-aperol");
    const $sumAperol= $("#sum-aperol");

    const $decrementButtonNegroni = $("#decrementButton-negroni");
    const $incrementButtonNegroni = $("#incrementButton-negroni");
    const $counterNegroni = $("#counter-negroni");
    const $sumNegroni = $("#sum-negroni");

    const $decrementButtonProsecco = $("#decrementButton-prosecco");
    const $incrementButtonProsecco = $("#incrementButton-prosecco");
    const $counterProsecco = $("#counter-prosecco");
    const $sumProsecco= $("#sum-prosecco");


    const $sumTotalPizza = $("#sum-total-pizza");
    const $sumTotalBebidas = $("#sum-total-bebidas");
    const $sumTotal = $("#sum-total");

    const $ButtonPedido = $("#Button-fazer-pedido");
    

    //Estado
    let counterMargherita = 0;
    let valorMargherita = 25;
    let sumMargherita = 0;

    let counterNapolitana = 0;
    let valorNapolitana = 25;
    let sumNapolitana = 0;
    
    let counterQueijos = 0;
    let valorQueijos = 25;
    let sumQueijos = 0;

    let counterPepperoni = 0;
    let valorPepperoni = 30;
    let sumPepperoni = 0;

    let counterCalabresa = 0;
    let valorCalabresa = 30;
    let sumCalabresa = 0;

    let counterFunghi = 0;
    let valorFunghi = 30;
    let sumFunghi = 0;

    let counterVinho = 0;
    let valorVinho = 30;
    let sumVinho = 0;

    let counterAperol = 0;
    let valorAperol = 30;
    let sumAperol = 0;

    let counterNegroni = 0;
    let valorNegroni = 30;
    let sumNegroni = 0;

    let counterProsecco = 0;
    let valorProsecco= 30;
    let sumProsecco = 0;

    let sumTotalPizza = 0;
    let sumTotalBebidas = 0;
    let sumTotal = 0;


    /**
     * Atualiza a o valor total do pedido referente as pizzas.
     * @returns 
    */
    const updateSumTotalPizza = () => $sumTotalPizza.text(sumTotalPizza);

    
    /**
     * Atualiza a o valor total do pedido referente as bebidas.
     * @returns 
     */
    const updateSumTotalBebidas = () => $sumTotalBebidas.text(sumTotalBebidas);

    /**
     * Atualiza a o valor total do pedido
     * @returns 
     */
    const updateSumTotal = () => $sumTotal.text(sumTotal);

    //PIZZA MARGHERITA
    /**
     * Atualiza o contador da quantidade de pizzas Margheritas
     * @returns 
     */
    const updateCounterMargherita = () => $counterMargherita.text(counterMargherita);

    /**
     * Atualiza a soma das pizzas Margheritas
     * @returns 
     */
    const updateSumMargherita = () => $sumMargherita.text(sumMargherita);


    /**
     * Incrementa o contador Margherita
     */
    const incrementCounterMargherita = () => {
        counterMargherita++;
        sumMargherita = counterMargherita * valorMargherita;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterMargherita();
        updateSumMargherita();
        updateSumTotalPizza();
        updateSumTotal();
    }

    /**
     * Diminui do contador Margherita
     */
    const decrementCounterMargherita = () => {
        counterMargherita--;
        sumMargherita = counterMargherita * valorMargherita;
        sumTotalPizza  = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterMargherita();
        updateSumMargherita();
        updatesumTotalPizza();
        updateSumTotal();
    }



//PIZZA NAPOLITANA
    /**
     * Atualiza o contador da quantidade de pizzas Napolitanas
     * @returns 
     */
    const updateCounterNapolitana = () => $counterNapolitana.text(counterNapolitana);

    /**
     * Atualiza a soma das pizzas Napolitanas
     * @returns 
     */
    const updateSumNapolitana = () => $sumNapolitana.text(sumNapolitana);

    /**
     * Incrementa o contador Napolitanas
     */
    const incrementCounterNapolitana = () => {
        counterNapolitana++;
        sumNapolitana = counterNapolitana * valorNapolitana;
        sumTotalPizza  = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterNapolitana();
        updateSumNapolitana();
        updatesumTotalPizza();
        updateSumTotal();
    }

    /**
     * Diminui do contador Napolitanas
     */
    const decrementCounterNapolitana = () => {
        counterNapolitana--;
        sumNapolitana = counterNapolitana * valorNapolitana;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterNapolitana();
        updateSumNapolitana();
        updatesumTotalPizza();
        updateSumTotal();
    }


//PIZZA QUATRO QUEIJOS
    /**
     * Atualiza o contador da quantidade de pizzas quatro queijos
     * @returns 
     */
    const updateCounterQueijos = () => $counterQueijos.text(counterQueijos);

    /**
     * Atualiza a soma das pizzas quatro queijos
     * @returns 
     */
    const updateSumQueijos = () => $sumQueijos.text(sumQueijos);

    /**
     * Incrementa o contador quatro queijos
     */
    const incrementCounterQueijos = () => {
        counterQueijos++;
        sumQueijos = counterQueijos * valorQueijos;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterQueijos();
        updateSumQueijos();
        updateSumTotalPizza();
        updateSumTotal();
    }

    /**
     * Diminui do contador quatro queijos
     */
    const decrementCounterQueijos = () => {
        counterQueijos--;
        sumQueijos = counterQueijos * valorQueijos;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterQueijos();
        updateSumQueijos();
        updateSumTotalPizza();
        updateSumTotal();
    }


//PIZZA PEPPERONI
    /**
     * Atualiza o contador da quantidade de pizzas pepperoni
     * @returns 
     */
    const updateCounterPepperoni = () => $counterPepperoni.text(counterPepperoni);

    /**
     * Atualiza a soma das pizzas pepperoni
     * @returns 
     */
    const updateSumPepperoni = () => $sumPepperoni.text(sumPepperoni);

    /**
     * Incrementa o contador pepperoni
     */
    const incrementCounterPepperoni = () => {
        counterPepperoni++;
        sumPepperoni = counterPepperoni * valorPepperoni;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterPepperoni();
        updateSumPepperoni();
        updateSumTotalPizza();
        updateSumTotal();
    }

    /**
     * Diminui do contador pepperoni
     */
    const decrementCounterPepperoni = () => {
        counterPepperoni--;
        sumPepperoni = counterPepperoni * valorPepperoni;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterPepperoni();
        updateSumPepperoni();
        updateSumTotalPizza();
        updateSumTotal();
    }


//PIZZA CALABRESA
    /**
     * Atualiza o contador da quantidade de pizzas Calabresa
     * @returns 
     */
    const updateCounterCalabresa = () => $counterCalabresa.text(counterCalabresa);

    /**
     * Atualiza a soma das pizzas Calabresa
     * @returns 
     */
    const updateSumCalabresa = () => $sumCalabresa.text(sumCalabresa);

    /**
     * Incrementa o contador Calabresa
     */
    const incrementCounterCalabresa = () => {
        counterCalabresa++;
        sumCalabresa = counterCalabresa * valorCalabresa;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterCalabresa();
        updateSumCalabresa();
        updateSumTotalPizza();
        updateSumTotal();
    }

    /**
     * Diminui do contador Calabresa
     */
    const decrementCounterCalabresa = () => {
        counterCalabresa--;
        sumCalabresa = counterCalabresa * valorCalabresa;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterCalabresa();
        updateSumCalabresa();
        updateSumTotalPizza();
        updateSumTotal();
    }

//PIZZA FUNGHI
    /**
     * Atualiza o contador da quantidade de pizzas Funghi
     * @returns 
     */
    const updateCounterFunghi = () => $counterFunghi.text(counterFunghi);

    /**
     * Atualiza a soma das pizzas Funghi
     * @returns 
     */
    const updateSumFunghi = () => $sumFunghi.text(sumFunghi);

    /**
     * Incrementa o contador Funghi
     */
    const incrementCounterFunghi = () => {
        counterFunghi++;
        sumFunghi = counterFunghi * valorFunghi;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterFunghi();
        updateSumFunghi();
        updateSumTotalPizza();
        updateSumTotal();
    }

    /**
     * Diminui do contador Funghi
     */
    const decrementCounterFunghi = () => {
        counterFunghi--;
        sumFunghi = counterFunghi * valorFunghi;
        sumTotalPizza = sumMargherita + sumNapolitana + sumQueijos + sumPepperoni + sumCalabresa + sumFunghi;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterFunghi();
        updateSumFunghi();
        updateSumTotalPizza();
        updateSumTotal();
    }


 //BEBIDA VINHO
    /**
     * Atualiza o contador da quantidade de Vinho
     * @returns 
     */
    const updateCounterVinho = () => $counterVinho.text(counterVinho);

    /**
     * Atualiza a soma de Vinho
     * @returns 
     */
    const updateSumVinho = () => $sumVinho.text(sumVinho);

    /**
     * Incrementa o contador Vinho
     */
    const incrementCounterVinho = () => {
        counterVinho++;
        sumVinho = counterVinho * valorVinho;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterVinho();
        updateSumVinho();
        updateSumTotalBebidas();
        updateSumTotal();
    }

    /**
     * Diminui do contador Vinho
     */
    const decrementCounterVinho = () => {
        counterVinho--;
        sumVinho = counterVinho * valorVinho;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterVinho();
        updateSumVinho();
        updateSumTotalBebidas();
        updateSumTotal();
    }

 //BEBIDA APEROL
    /**
     * Atualiza o contador da quantidade de Aperol
     * @returns 
     */
    const updateCounterAperol = () => $counterAperol.text(counterAperol);

    /**
     * Atualiza a soma de Aperol
     * @returns 
     */
    const updateSumAperol = () => $sumAperol.text(sumAperol);

    /**
     * Incrementa o contador Aperol
     */
    const incrementCounterAperol = () => {
        counterAperol++;
        sumAperol= counterAperol * valorAperol;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterAperol();
        updateSumAperol();
        updateSumTotalBebidas();
        updateSumTotal();
    }

    /**
     * Diminui do contador Aperol
     */
    const decrementCounterAperol = () => {
        counterAperol--;
        sumAperol = counterAperol * valorAperol;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterAperol();
        updateSumAperol();
        updateSumTotalBebidas();
        updateSumTotal();
    }

     //BEBIDA NEGRONI
    /**
     * Atualiza o contador da quantidade de Negroni
     * @returns 
     */
    const updateCounterNegroni = () => $counterNegroni.text(counterNegroni);

    /**
     * Atualiza a soma de Negroni
     * @returns 
     */
    const updateSumNegroni = () => $sumNegroni.text(sumNegroni);

    /**
     * Incrementa o contador Negroni
     */
    const incrementCounterNegroni = () => {
        counterNegroni++;
        sumNegroni= counterNegroni * valorNegroni;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterNegroni();
        updateSumNegroni();
        updateSumTotalBebidas();
        updateSumTotal();
    }

    /**
     * Diminui do contador Negroni
     */
    const decrementCounterNegroni = () => {
        counterNegroni--;
        sumNegroni = counterNegroni * valorNegroni;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterNegroni();
        updateSumNegroni();
        updateSumTotalBebidas();
        updateSumTotal();
    }


 //BEBIDA PROSECCO
    /**
     * Atualiza o contador da quantidade de Prosecco
     * @returns 
     */
    const updateCounterProsecco = () => $counterProsecco.text(counterProsecco);

    /**
     * Atualiza a soma de Prosecco
     * @returns 
     */
    const updateSumProsecco= () => $sumProsecco.text(sumProsecco);

    /**
     * Incrementa o contador Prosecco
     */
    const incrementCounterProsecco = () => {
        counterProsecco++;
        sumProsecco= counterProsecco * valorProsecco;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterProsecco();
        updateSumProsecco();
        updateSumTotalBebidas();
        updateSumTotal();
    }

    /**
     * Diminui do contador Prosecco
     */
    const decrementCounterProsecco = () => {
        counterProsecco--;
        sumProsecco = counterProsecco * valorProsecco;
        sumTotalBebidas = sumVinho + sumAperol + sumNegroni + sumProsecco;
        sumTotal = sumTotalPizza + sumTotalBebidas;
        updateCounterProsecco();
        updateSumProsecco();
        updateSumTotalBebidas();
        updateSumTotal();
    }


    const FazerPedido = () => {
        $ButtonPedido.text("Pedido realizado");
    }

    //Adicionar as funções aos botões
    $incrementButtonMargherita.click(incrementCounterMargherita);
    $decrementButtonMargherita.click(decrementCounterMargherita);

    $incrementButtonNapolitana.click(incrementCounterNapolitana);
    $decrementButtonNapolitana.click(decrementCounterNapolitana);

    $incrementButtonQueijos.click(incrementCounterQueijos);
    $decrementButtonQueijos.click(decrementCounterQueijos);

    $incrementButtonPepperoni.click(incrementCounterPepperoni);
    $decrementButtonPepperoni.click(decrementCounterPepperoni);

    $incrementButtonCalabresa.click(incrementCounterCalabresa);
    $decrementButtonCalabresa.click(decrementCounterCalabresa);

    $incrementButtonFunghi.click(incrementCounterFunghi);
    $decrementButtonFunghi.click(decrementCounterFunghi);

    $incrementButtonVinho.click(incrementCounterVinho);
    $decrementButtonVinho.click(decrementCounterVinho);

    $incrementButtonAperol.click(incrementCounterAperol);
    $decrementButtonAperol.click(decrementCounterAperol);

    $incrementButtonNegroni.click(incrementCounterNegroni);
    $decrementButtonNegroni.click(decrementCounterNegroni);

    $incrementButtonProsecco.click(incrementCounterProsecco);
    $decrementButtonProsecco.click(decrementCounterProsecco);


    $ButtonPedido.click(FazerPedido);
})