const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const MY_SHOPPE = {
    modal: $(".modal"),
    modalOverlay : $(".modal .modal__overlay"),
    formRegister : $(".auth-form.auth_form-register"),
    formLogin : $(".auth-form.auth_form-login"),
    authForm: $$(".modal .auth-form"),
    nodeRegister: $(".header__navbar-register"),
    nodeLogin: $(".header__navbar-login"),
    transferLogin: $(".auth-form__transfer-login"),
    transferRegister: $(".auth-form__transfer-register"),
    cancelForm: $$(".auth-form__controls-back"),
    start: function(){
        this.handleRegister();
        this.handleLogin();
        this.handleTransferRegister();
        this.handleTransferLogin();
        this.handleCancelForm();
    },
    handleRegister : function(){
        this.nodeRegister.onclick = () =>{
            this.modal.classList.add("active")
            this.formRegister.classList.add("active")
        }
    },
    handleLogin : function(){
        this.nodeLogin.onclick = () =>{
            this.modal.classList.add("active")
            this.formLogin.classList.add("active")
        }
    },
    handleTransferRegister : function(){
        this.transferLogin.onclick = () =>{
            this.formRegister.classList.remove("active")
            this.formLogin.classList.add("active")
        }
    },
    handleTransferLogin : function(){
        this.transferRegister.onclick = () =>{
            this.formLogin.classList.remove("active")
            this.formRegister.classList.add("active")
        }
    },
    handleCancelForm : function(){
        this.modalOverlay.onclick = () =>{
            this.modal.classList.remove("active")
            this.authForm.forEach((item,index) => {
                item.classList.remove("active")
            });
            
        }
        this.cancelForm.forEach((item,index)=> {
            item.onclick = () =>{ 
                this.modal.classList.remove("active")
                this.authForm[index].classList
                    .remove("active")
            }
        });
    },  
}

MY_SHOPPE.start();