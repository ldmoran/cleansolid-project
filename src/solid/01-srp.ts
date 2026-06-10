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

class UserBloc {

    constructor(
        private userService: UserService,
        private mailer: Mailer
    ) {}

    loadUser(id: number) {
        this.userService.loadUser(id);
    }

    saveUser(user: User) {
        this.userService.saveUser(user);
    }

    notifyUser() {
        this.mailer.sendEmail();
    }

}

const userService = new UserService();
const mailer = new Mailer();

const userBloc = new UserBloc(
    userService,
    mailer
);

const subscriptionBloc = new SubscriptionBloc();

userBloc.loadUser(10);
userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();

subscriptionBloc.onAddSubscription(1234);