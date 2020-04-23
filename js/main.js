const vm_main = new Vue({
    el:"#main",
    data:{
        history:"",
        atual:"",
        result:0,
        lastOperator:"",
        nextReset:false
    },
    methods: {
        addNumber(x)
        {
            if(this.nextReset)
            {
                this.clearAll();
            }
            if(this.atual.length < 8)
            {
                this.atual += "" + x;
            }
        },
        addOperator(o)
        {
            if(this.nextReset)
            {
                this.clearAll();
            }
            if(this.lastOperator != "")
            {
                if(this.atual != "")
                {
                    switch(this.lastOperator)
                    {
                        case "+":
                            this.result += parseFloat(this.atual)
                            break;
                        case "-":
                            this.result -= parseFloat(this.atual)
                            break;
                        case "*":
                            this.result *= parseFloat(this.atual)
                            break;
                        case "/":
                            this.result /= parseFloat(this.atual)
                            break;
                    }
                    if(this.result.toString().length > 8 || this.result == "Infinity")
                    {
                        this.result = "ERR";
                        this.nextReset = true;
                    }
                }
                else
                {
                    this.history = `${this.history.slice(0,this.history.length-2)}`;
                }
            }
            else
            {
                if(this.atual != "")
                {
                    this.result = parseFloat(this.atual);
                }
            }
            if(this.atual != "" || this.lastOperator != "")
            {
                this.history += `${this.atual} ${o} `;
                //this.result = ParseFloat(this.atual);
                this.lastOperator = o;
                this.atual = "";
            }
        },
        resultOperation()
        {
            if(this.atual != "")
            {
                switch(this.lastOperator)
                {
                    case "+":
                        this.result += parseFloat(this.atual)
                        break;
                    case "-":
                        this.result -= parseFloat(this.atual)
                        break;
                    case "*":
                        this.result *= parseFloat(this.atual)
                        break;
                    case "/":
                        this.result /= parseFloat(this.atual)
                        break;
                    default:
                        this.result = parseFloat(this.atual)
                }
                if(this.result.toString().length > 8 || this.result == "Infinity")
                {
                    this.result = "ERR";
                }
            }
            else
            {
                this.history = `${this.history.slice(0,this.history.length-2)}`;
            }
            this.history += `${this.atual} = `;
            //this.result = ParseFloat(this.atual);
            //this.lastOperator = o;
            this.atual = "";
            this.nextReset = true;
        },
        invertAtual()
        {
            if(this.atual != "")
            {
                this.atual = (parseFloat(this.atual) * -1).toString(); 
            }
        },
        deleteLastNumber()
        {
            this.atual = this.atual.slice(0,this.atual.length - 1);
        },
        addDot()
        {
            if(!this.atual.includes('.'))
            {
                this.addNumber('.');
            }
        },
        clearAll()
        {
            this.history = "";
            this.atual = "";
            this.result = 0;
            this.lastOperator = "";
            this.nextReset = false;
        },
        clear()
        {
            this.atual = "";
        }
    },
    watch: {
        
    }
});