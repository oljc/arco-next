import { withInstall } from '../_utils/withInstall';
import _Form from './form.vue';
import _FormItem from './form-item.vue';

const Form = withInstall(_Form, { Item: _FormItem });

export type FormInstance = InstanceType<typeof _Form>;
export type FormItemInstance = InstanceType<typeof _FormItem>;
export type {
  ValidateStatus,
  ValidateTrigger,
  ValidatedError,
  FieldRule,
  FormItemEventHandler,
} from './interface';

export { _FormItem as FormItem };

export default Form;
