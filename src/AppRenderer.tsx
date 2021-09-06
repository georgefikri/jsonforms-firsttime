import {
  withJsonFormsLayoutProps,
  ResolvedJsonFormsDispatch,
} from "@jsonforms/react";

type IState = {
  uischema: any;
  schema: any;
  path: any;
  visible: any;
  renderers: any;
};

// partials ( utility type) ==> we gonna have some of the fields
const AppRenderer = (props: Partial<IState>) => {
  return (
    <div>
      {props.uischema.elements?.map((element: any, index: number) => (
        <ResolvedJsonFormsDispatch {...props} uischema={element} key={index} />
      ))}
    </div>
  );
};

export default withJsonFormsLayoutProps(AppRenderer);
