import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent implements OnInit {

  imc: number;

  imcLabel: string;

  isMeters = false;
  isKilos = false;
  errorsMessage: boolean;

  constructor() { }

  imcCalculator = new FormGroup({
    altoCm : new FormControl('', [Validators.required]),
    altoMeters : new FormControl(''),
    // alto : new FormControl({value: '', disabled: true}, [Validators.required]),
    // altoSlide : new FormControl('', Validators.required),
    // genderFemale: new FormControl('', [Validators.required]),
    ageInput : new FormControl('', [Validators.required]),
    // ageSlider: new FormControl(''),
    pesoKilo : new FormControl(''),
    pesoLibs : new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    // console.log(this.imcCalculator.get('altoMeters'));
  }

  // To Do List

  onSubmit() {
    if ( this.imcCalculator.valid ) {
      this.errorsMessage = false;
      this.calcularImc();
    } else {
      this.errorsMessage = true;
    }
  }

  resetTheForm(): void {
    this.imcCalculator.reset();
    this.errorsMessage = false;
  }

  // onKeyUpAge() {
  //   let ageSlider = this.imcCalculator.get('ageSlider')?.value;
  //   const ageInput = this.imcCalculator.get('ageInput')?.value;
  //   ageSlider = ageInput;
  // }

  // Toogle cm to m
  toogleCmToM() {
    this.isMeters = true;
    if ( this.isMeters ) {
      this.imcCalculator.get('altoMeters')?.setValidators([Validators.required]);
      this.imcCalculator.get('altoCm')?.clearValidators();
      this.imcCalculator.get('altoCm')?.updateValueAndValidity();
    }
    console.log(this.imcCalculator.get('altoCm'));

  }

  // Toogle m to cm
  toogleMToCm() {
    this.isMeters = false;
    if ( !this.isMeters ) {
      this.imcCalculator.get('altoCm')?.setValidators([Validators.required]);
      this.imcCalculator.get('altoMeters')?.clearValidators();
      this.imcCalculator.get('altoMeters')?.updateValueAndValidity();
    }
    console.log(this.imcCalculator.get('altoMeters'));
  }

  // Toogle cm to m
  toogleLbToKg() {
    this.isKilos = true;
    if ( this.isKilos ) {
      this.imcCalculator.get('pesoKilo')?.setValidators([Validators.required]);
      this.imcCalculator.get('pesoLibs')?.clearValidators();
      this.imcCalculator.get('pesoLibs')?.updateValueAndValidity();
    }
  }

  // Toogle m to cm
  toogleKgToLb() {
    this.isKilos = false;
    if ( !this.isKilos ) {
      this.imcCalculator.get('pesoLibs')?.setValidators([Validators.required]);
      this.imcCalculator.get('pesoKilo')?.clearValidators();
      this.imcCalculator.get('pesoKilo')?.updateValueAndValidity();
    }
  }

  // Funcion convierte peso en libras a Kilos

  convertLibstoKg(weight: number) {
    const weightToKg = weight / 2.205;
    return weightToKg;
  }

  // Funcion convierte alto en cm a metros

  convertCmtoM(height: number) {
    const heightToMeters = height / 100;
    return heightToMeters;
  }

  // Funcion saca cuadrado alto en metros

  squareOfHeight(heightMt: number) {
    const squareHeight = heightMt * heightMt;
    return squareHeight;
  }

  // Funcion asignar un label segun tabla IMC

  assignLabel(imc: number) {
    if (imc <= 18.4) {
      this.imcLabel = 'Bajo Peso';
    }
    if (imc >= 18.5 && imc <= 24.9) {
      this.imcLabel = 'Peso Normal';
    }
    if (imc >= 25 && imc <= 29.9) {
      this.imcLabel = 'Sobrepeso';
    }
    if (imc >= 30 && imc <= 34.9) {
      this.imcLabel = 'Obesidad';
    }
    if (imc >= 35) {
      this.imcLabel = 'Obesidad Extrema';
    }
  }

  // Funcion calcula IMC

  calcularImc(): void  {

    const initialHeightCm = this.imcCalculator.value.altoCm;
    let weightKg = this.imcCalculator.value.pesoKilo;
    const initialWeightLb = this.imcCalculator.value.pesoLibs;
    let heightMeters = this.imcCalculator.value.altoMeters;

    if (!this.isMeters) {
      const heightConvertToMeters = this.convertCmtoM(initialHeightCm);
      heightMeters = heightConvertToMeters;
      // console.log(heightConvertToMeters);
    }
    if (!this.isKilos) {
      const weightConvertToKg = this.convertLibstoKg(initialWeightLb);
      weightKg = weightConvertToKg;
    }

    const squareHeight = this.squareOfHeight(heightMeters);
    this.imc = weightKg / squareHeight;
    this.assignLabel(this.imc);

    // if (!this.isMeters) {
    //   const heightMeters = this.convertCmtoM(heightCm);
    //   const squareHeight = this.squareOfHeight(heightMeters);
    //   console.log(squareHeight);
    //   this.imc = pesoKg / squareHeight;
    //   this.assignLabel(this.imc);
    // } else {
    //   const heightMeters = this.imcCalculator.value.altoMeters;
    //   const squareHeight = this.squareOfHeight(heightMeters);
    //   console.log(squareHeight);
    //   this.imc = pesoKg / squareHeight;
    //   this.assignLabel(this.imc);
    // }

  }
}

//
// Si es libras > cambiarlo a Kg  
//
