window.onload = function(){

    
    alert('Hello, open please web-console before start');
    

    


    let data = {

        users: [
    
            {name: 'Bob', rating: 20, email: 'bob@mail.com', disabled: false,},
            {name: 'Jack', rating: 37, email: 'ab1jack@mail.com', disabled: true,},
            {name: 'Adam', rating: 26, email: 'adam@mail.com', disabled: false,},
            {name: 'Kate', rating: 14, email: 'kate@mail.com', disabled: false,},
    
        ],
    }

    console.log(data.users);


    document.querySelector('.sort-by-rating').addEventListener('click', sortRating);
    
    function sortRating(){

        data.users.sort(function(a,b){ 

            return a.rating - b.rating;

        });
        alert('Users was sorted by rating');
        console.log(data.users);
        
    }

    document.querySelector('.sort-by-email').addEventListener('click', sortEmail);

    function sortEmail(){

        data.users.sort(function(a,b){

            if(a.email < b.email){
                return -1;
            }else if(a.email > b.email){
                return 1;
            }else {
                return 0;
            }

        })     
    
        alert('Users was sorted by e-mail');
        console.log(data.users);        



    }



    document.querySelector('.sort-by-name').addEventListener('click', sortName);

    function sortName(){
               
        data.users.sort(function(a,b){

            if(a.name < b.name){
                return -1;
            }else if(a.name > b.name){
                return 1;
            }else {
                return 0;
            }

        })     
    
        alert('Users was sorted by names');
        console.log(data.users);
    }

    
    document.querySelector('.hide-disabled').addEventListener('click', hideDisabled);


    
    
    
    function hideDisabled(){
        
        let val = false;
        
        let index = data.users.filter(function(item){

            return item.disabled === val;


        })
        
        alert('Disabled users were hidden')
        
        console.log(index);
    }


    document.querySelector('.show-disabled').addEventListener('click', showDisabled);

    function showDisabled(){

        console.log(data.users);

        alert('Disabled users can be seen')
    
    }



    document.querySelector('.console-clear').addEventListener('click', consoleClear);

    function consoleClear(){

        console.clear();


    }





}