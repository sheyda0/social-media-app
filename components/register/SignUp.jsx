import Input from "../Input";
import PrimaryButton from "../buttons/PrimaryButton";

const SignUp = () => {
  return (
    <div class="form sign-up flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-col mb-[3rem]">
          <h2 className="text-[2.5rem] text-milky font-semibold">
            Get started
          </h2>
          <span className="text-[1rem] text-gray">Create a new account</span>
        </div>
        <Input placeholder="Username" type="text" cln="mb-[1.5rem] w-[35rem]" />
        <Input placeholder="Email" type="text" cln="mb-[1.5rem] w-[35rem]" />
        <Input
          placeholder="Password"
          type="password"
          cln="mb-[1.5rem] w-[35rem]"
        />

        <PrimaryButton cln="h-[4rem] round btn-15-round text-[1.125rem]">
          Sign In
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SignUp;
