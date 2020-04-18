const vm_main = new Vue({
    el:"#main",
    data:{
        history:"",
        atual:"",
        result:0,
        lastOperator:""
    },
    methods: {
        addNumber(x)
        {
            if(this.atual.length < 8)
            {
                this.atual += "" + x;
            }
        },
        addOperator(o)
        {
            if(this.lastOperator != "")
            {
                switch(this.lastOperator)
                {
                    case "+":
                        this.result += parseFloat(this.atual)
                        break;
                    case "-":
                        this.result -= this.atual
                        break;
                    case "*":
                        this.result *= this.atual
                        break;
                    case "/":
                        this.result /= this.atual
                        break;
                }
            }
            else
            {
                this.result = parseFloat(this.atual);
            }
            this.history += `${this.atual} ${o} `;
            //this.result = ParseFloat(this.atual);
            this.lastOperator = o;
            this.atual = ""
        }
    },
    watch: {
        
    }
});