import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';


export class UsernameValidators {
static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
        return { cannotContainSpace : true };
    }
    return null ;


}
static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (control.value === 'mukti') {
    resolve({shouldBeUnique: true});
}
resolve(null);
}, 1000);
});
}

}
