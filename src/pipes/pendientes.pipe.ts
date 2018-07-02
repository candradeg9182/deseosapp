import {Pipe, PipeTransform} from '@angular/core'
import { Lista } from "../app/clases/index";


@Pipe({
    name:'pendiente'
})
export class PendientePipe implements PipeTransform {
    transform(value: type, args:any[]) :type {
        return;
    }
}