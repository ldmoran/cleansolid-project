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

class UserBloc {

    notifyUser() {
        console.log('Enviando correo a los usuarios');
    }

}

const userService = new UserService();
const userBloc = new UserBloc();
const subscriptionBloc = new SubscriptionBloc();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });

userBloc.notifyUser();

subscriptionBloc.onAddSubscription(1234);