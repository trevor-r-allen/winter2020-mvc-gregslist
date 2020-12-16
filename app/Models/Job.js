import { generateId } from "../Utils/GenerateId.js";

export default class Job{
  constructor({company, jobTitle, hours, rate, description, imgUrl}){
    console.log("Job Constructor")
    this.id = generateId()
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description
    this.imgUrl = imgUrl
  }
  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="https://place-hold.it/200x200">
        <div class="card-body">
            <h4 class="card-title">${this.jobTitle} - at ${this.company} - ${this.hours}hours/week</h4>
            <p class="card-text">${this.description}</p>
            <p class="card-text">$${this.rate}</p>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}