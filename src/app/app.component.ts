import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validator,
  RequiredValidator,
  Validators,
  EmailValidator
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  constructor(private fb: FormBuilder) {}

  employee: FormGroup;

  ngOnInit() {
    // this.employee = new FormGroup({
    //   fullname: new FormControl(),
    //   email: new FormControl(),

    //   // Nested form FormGroup

    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experianceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // });

    this.employee = this.fb.group({
      fullname: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      email: ["", [Validators.email]],
      skills: this.fb.group({
        skillName: [""],
        experianceInYears: [""],
        proficiency: ["beginers"]
      })
    });
  }

  submit(): void {
    console.log(this.employee.controls.fullname.touched);
    console.log(this.employee.controls.email.touched);
  }

  onLoadDataClick(): void {
    this.employee.patchValue({
      fullname: "Shubham",
      email: "Shubham@gmail.com",
      skills: {
        skillName: "Angular",
        experianceInYears: "5",
        proficiency: "intermediate"
      }
    });
  }

  onClearData(): void {
    this.employee.setValue({
      fullname: "",
      email: "",
      skills: {
        skillName: "",
        experianceInYears: "",
        proficiency: ""
      }
    });
  }
}
