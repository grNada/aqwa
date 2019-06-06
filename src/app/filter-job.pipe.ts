import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './modules/annonces';

@Pipe({
  name: 'filterJob'
})
export class FilterJobPipe implements PipeTransform {
  transform(listejob: Annonce[], searchTerm:string): Annonce[]{

    if (!listejob || !searchTerm){
        return listejob;
    }
    return listejob.filter(listejob =>
        listejob.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        
}
}
