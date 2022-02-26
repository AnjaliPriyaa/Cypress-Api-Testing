describe('API TO DO',()=>{
    //setup running properly
        it('Should run',()=>{});
        it('GET/todos/id',()=>{})
       
        it('GET',()=>{
                cy.request({
                    method:'GET',
                    url:'https://httpbin.org/get',
                }).then((res)=>{
                    expect(res.body).have.property('url');
            });
        }); 
        it('POST/todos/=>Created Todo',()=>{});
        it('POST/todos/=>Validated Request body',()=>{ });
        it('POST',()=>{
            cy.request({
                method:'POST',
                url:'https://httpbin.org/post',
                body:{
                    "name":"Anjali",
                    "age" :21
                },
                headers:{
                    'content-type':'application/json'
                }              
            }).then((res)=>{
                expect(res.body).have.property('json');
                expect(res.body.json).to.deep.equal({
                   
                    "name":"Anjali",
                     "age":21
                });

        });
        
    });
    it('Put Request',  ()=>{
        cy.request('PUT', 'https://httpbin.org/put',{'name': 'Anjali'}).then((res)=>{ 
            expect (res.body).to.have.property('json');
            expect (res.body.json).to.deep.equal( {"name": "Anjali"})
        });
    });
    it('Patch Request',  ()=>{
        cy.request('PATCH', 'https://httpbin.org/patch',{'name': 'Anjali'}).then((res)=>{ 
            expect (res.body).to.have.property('json');
            expect (res.body.json).to.deep.equal( {"name": "Anjali"})
        });
    });

});
       