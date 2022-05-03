import Cookie from 'js-cookie';

const SignOutService = {
  execute(): void {
    Cookie.remove('api-agendese');
  }
}

export default SignOutService;
