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
    btnHomeFilter: $$(".home-filter .btn"),
    btnPopular: $(".home-filter__popular"),
    btnBestSeller: $(".home-filter__bestseller"),
    btnLatest: $(".home-filter__latest"),
    proPopular: $$(".popular--active"),
    proLatest: $$(".latest--active"),
    proBestSeller: $$(".bestseller--active"),
    itemProduct: $$(".home-product .js-product"),
    headerItem: $$(".header__sort-bar .header__sort-item"),
    headerPopular: $(".header__sort-item-popular"),
    headerLatest: $(".header__sort-item-latest"),
    headerBest: $(".header__sort-item-bestseller"),
    start: function(){
        this.handleRegister();
        this.handleLogin();
        this.handleTransferRegister();
        this.handleTransferLogin();
        this.handleCancelForm();
        this.handleTransferProductPopular();
        this.handleTransferProductLatest();
        this.handleTransferProductBestseller();
    },
    handleTransferProductLatest: function(){
        this.btnLatest.onclick = () =>{
            if(this.btnLatest.classList.contains("btn--active")) return;
            this.btnHomeFilter.forEach((item)=>{
                item.classList.remove("btn--active");
            })
            this.btnLatest.classList.add("btn--active");
            this.itemProduct.forEach((item)=>{
                item.classList.remove("active");
            })
            this.proLatest.forEach((item)=>{
                item.classList.add("active");
            })
            this.headerItem.forEach((item)=>{
                item.classList.remove("header__sort-item--active")
            })
            this.headerLatest.classList.add("header__sort-item--active");
        }
        this.headerLatest.onclick = () =>{
            if(this.headerLatest.classList.contains("header__sort-item--active")) return;
            this.headerItem.forEach((item)=>{
                item.classList.remove("header__sort-item--active");
            })
            this.headerLatest.classList.add("header__sort-item--active");
            this.itemProduct.forEach((item)=>{
                item.classList.remove("active");
            })
            this.proLatest.forEach((item)=>{
                item.classList.add("active");
            })
            this.btnHomeFilter.forEach((item)=>{
                item.classList.remove("btn--active")
            })
            this.btnLatest.classList.add("btn--active");
        }
    },
    handleTransferProductPopular: function(){
        this.btnPopular.onclick = () =>{
            if(this.btnPopular.classList.contains("btn--active")) return;
            this.btnHomeFilter.forEach((item)=>{
                item.classList.remove("btn--active");
            })
            this.btnPopular.classList.add("btn--active");
            this.itemProduct.forEach((item)=>{
                item.classList.remove("active");
            })
            this.proPopular.forEach((item)=>{
                item.classList.add("active");
            })
            this.headerItem.forEach((item)=>{
                item.classList.remove("header__sort-item--active")
            })
            this.headerPopular.classList.add("header__sort-item--active");
        }
        this.headerPopular.onclick = () =>{
            if(this.headerPopular.classList.contains("header__sort-item--active")) return;
            this.headerItem.forEach((item)=>{
                item.classList.remove("header__sort-item--active");
            })
            this.headerPopular.classList.add("header__sort-item--active");
            this.itemProduct.forEach((item)=>{
                item.classList.remove("active");
            })
            this.proPopular.forEach((item)=>{
                item.classList.add("active");
            })
            this.btnHomeFilter.forEach((item)=>{
                item.classList.remove("btn--active")
            })
            this.btnPopular.classList.add("btn--active");
        }
    },
    handleTransferProductBestseller: function(){
        this.btnBestSeller.onclick = () =>{
            if(this.btnBestSeller.classList.contains("btn--active")) return;
            this.btnHomeFilter.forEach((item)=>{
                item.classList.remove("btn--active");
            })
            this.btnBestSeller.classList.add("btn--active");
            this.itemProduct.forEach((item)=>{
                item.classList.remove("active");
            })
            this.proBestSeller.forEach((item)=>{
                item.classList.add("active");
            })
            this.headerItem.forEach((item)=>{
                item.classList.remove("header__sort-item--active")
            })
            this.headerBest.classList.add("header__sort-item--active");
        }
        this.headerBest.onclick = () =>{
            if(this.headerBest.classList.contains("header__sort-item--active")) return;
            this.headerItem.forEach((item)=>{
                item.classList.remove("header__sort-item--active");
            })
            this.headerBest.classList.add("header__sort-item--active");
            this.itemProduct.forEach((item)=>{
                item.classList.remove("active");
            })
            this.proBestSeller.forEach((item)=>{
                item.classList.add("active");
            })
            this.btnHomeFilter.forEach((item)=>{
                item.classList.remove("btn--active")
            })
            this.btnBestSeller.classList.add("btn--active");
        }
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