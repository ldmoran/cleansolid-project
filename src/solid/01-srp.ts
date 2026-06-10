interface User {
    id: number;
    name: string;
}

class SubscriptionBloc {

    onAddSubscription(subscriptionId: number) {
        console.log('Agregando suscripción:', subscriptionId);
    }

}

class UserService {

    loadUser(id: number) {
        console.log('Cargando usuario con id:', id);
    }

    saveUser(user: User) {
        console.log('Guardando en base de datos:', user);
    }

}

class Mailer {

    sendEmail() {
        console.log('Enviando correo a los usuarios');
    }

}

class UserBloc {}

const userService = new UserService();
const mailer = new Mailer();
const subscriptionBloc = new SubscriptionBloc();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });

mailer.sendEmail();

subscriptionBloc.onAddSubscription(1234);