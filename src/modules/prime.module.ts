import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

const components = [
    CardModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    InputTextModule
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...components],
    exports: components
})
export class PrimeModule {}
