/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TConfig = {

  defaultValues?: Record<string, any>;
  resolver?: any
}

type TUserProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode,
  className?: string
} & TConfig

const ContainForm = ({
  onSubmit,
  children,
  className,
  defaultValues,
  resolver
}: TUserProps) => {
  const formConfig: TConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues
  }

  if (resolver) {
    formConfig["resolver"] = resolver
  }

  const methods = useForm(formConfig)

  const submitData = (data: FieldValues) => {
    onSubmit(data)
    methods.reset()
  }
  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(submitData)}
      >
        {children}
      </form>
    </FormProvider>
  )
};

export default ContainForm;