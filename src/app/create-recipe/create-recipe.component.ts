import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ingredients=[
    {name:"Ingrediant 1", checked : false, brands:"", cookingTime:"", cookingMethod:""},
    {name:"Ingrediant 2", checked : false, brands:"", cookingTime:"", cookingMethod:""},
    {name:"Ingrediant 3", checked : false, brands:"", cookingTime:"", cookingMethod:""},
  ]
  types=['Type 1', 'Type 2', 'Type 3'];
  
  checked(index:any, val:any){
    let list= this.ingredients;
    let a =list[index];
    a.checked = !val;
    this.ingredients = [...list];
  }
  nextFunc(){
    console.log("this.ingredients",this.ingredients)
    let data= this.ingredients.filter((f)=>f.checked)
    this.http.post("http://localhost:3000/save_Recipe", data).toPromise().then((res:any)=>{
      console.log("res",res)

    }).catch((err:any) =>{
      console.log("err",err)
    })
  }
  
  ngOnInit(): void {
  }

}
