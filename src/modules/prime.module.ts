import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";

const components = [
    CardModule
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...components],
    exports: components
})
export class PrimeModule {}
