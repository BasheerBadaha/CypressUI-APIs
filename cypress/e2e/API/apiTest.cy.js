import APIs from "../../pages/apis"
import { user } from "../../fixtures/users"
//const apis = new APIs
let tokenValue
describe("API Tests", () => {

    it("[GET] login", ()=>{
        cy.request({
           method: 'GET',
           url: '/users/login',
           headers:{
            accept: 'application/json'
           },
           body:{
            "email": "test2@fake.com",
            "password": "myNewPassword"
           },
           failOnStatusCode: false
        }).then((response)=>{
            tokenValue = response.body.access_token;
            cy.log(response)
            cy.log(tokenValue)
            expect(response.status).to.eq(200)
        })
    })

    it("New Test Case", ()=>{
        cy.request({
            method: "POST",
            url: "/users",
            Authentication: 'Bearer ' + tokenValue,
            body:{
                "firstName": "Test",
                "lastName": "User",
                "email": user.randomEmail,
                "password": "myPassword"
            }
        }).then((response) =>{
            cy.log(response)
            expect(response.status).to.eq(201)
        }),
        it('new', ()=>{
            cy.request({
                method: 'POST',
                url: '/users',
                body:{
                    "name":"basheer",

                }
            }).then((response)=>{
                cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body).to.contain(hey)
            })
        })
    })
   
//     it("[GET] Search a user - 200 OK ", () => {
//         cy.request({
//             method: 'GET',
//             url: '/users',
//             headers: {
//                 accept: 'application/json'
//             }
//         }).then((response)=>{
//             expect(response.status).to.eq(200)
//             let res = response.body
//             token = res.accessToken
//             cy.request({
//                 method: 'POST',
//                 url: '/feedback',
//                 body: {
//                     body:"test comment Basheer API",
//                     receiverId: 2,
//                     title: "test title Basheer API"
//                 },
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }     
//             }).then((response)=>{
//             expect(response.status).to.eq(200)
//             expect(response.body.author.username).to.eq(user.usernames.user1)
//             expect(response.body.receiver.username).to.eq(user.usernames.user2)
//             expect(response.body.title).to.eq("test title Basheer API")
//             expect(response.body.body).to.eq("test comment Basheer API")
//             })

//         })
    
//     })

//     it("[POST] Create Feedback Without Login - 401 Unauthorized", () => {

//           cy.request({
//                 method: 'POST',
//                 url: '/feedback',
//                 failOnStatusCode: false,
//                 body: {
//                     body:"test comment Basheer API",
//                     receiverId: 1,
//                     title: "test title Basheer API"
//                 }, 
//             }).then((response)=>{
//             expect(response.status).to.eq(401)
//             expect(response.body.message).to.eq("Authorization is required for request on POST /feedback")
//             })      
//     })

//     it("[POST] Users Can Not Write Feedback For Themselves - 400 BadRequestError [Resolved Bug]", () => {
//         let token
//         cy.request({
//             method: 'POST',
//             url: '/auth/sign-in',
//             failOnStatusCode: false,
//             body: {
//                 username: user.usernames.user1, 
//                 password: user.passwords.correctPassword
//             },
//             headers: {
//                 accept: 'application/json'
//             }
//         }).then((response)=>{
            
//             let res = response.body
//             token = res.accessToken
//             cy.request({
//                 method: 'POST',
//                 url: '/feedback',
//                 failOnStatusCode: false,
//                 body: {
//                     body:"test comment Basheer API",
//                     receiverId: 1,
//                     title: "test title Basheer API"
//                 },
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }     
//             }).then((response)=>{
//             expect(response.status).to.eq(400)
//             expect(response.body.message).to.eq("Users Can Not Write Feedback For Themselves")
//             })

//         })
    
//     })

//     it("[GET] Get the list of Feedbacks - 200 OK", () => {
//         let token
//         cy.request({
//             method: 'POST',
//             url: '/auth/sign-in',
//             body: {
//                 username: user.usernames.user1, 
//                 password: user.passwords.correctPassword
//             },
//             headers: {
//                 accept: 'application/json'
//             }
//         }).then((response)=>{
//             expect(response.status).to.eq(200)
//             let res = response.body
//             token = res.accessToken
//             cy.request({
//                 method: 'GET',
//                 url: '/feedback',
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }     
//             }).then((response)=>{
//             expect(response.status).to.eq(200)
//             expect(response.body[0].author.username).to.eq(user.usernames.user1)
//             expect(response.body[0].receiver.username).to.eq(user.usernames.user2)
//             })

//         })
//     })

//     it("[GET] Get the list of Feedbacks Without Login - 401 Unauthorized", () => {
//         cy.request({
//               method: 'GET',
//               url: '/feedback',
//               failOnStatusCode: false,
//           }).then((response)=>{
//           expect(response.status).to.eq(401)
//           expect(response.body.message).to.eq("Authorization is required for request on GET /feedback")
//           })      
//   })
        
})


    