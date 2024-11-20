import { Button, Form, FormProps, Input } from "antd";
import { LoginData } from "./types";
import "./styles.css";

const onFinish: FormProps<LoginData>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<LoginData>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const AppLoginForm = () => {
    return (
        <div className="centered-container">
            <Form
                name="login form"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item<LoginData>
                    name="username"
                    rules={[{ required: true, message: 'digite o seu usuário' }]}
                >
                    <Input className="form-input" placeholder="Digite o seu usuário" />
                </Form.Item>

                <Form.Item<LoginData>
                    name="password"
                    rules={[{ required: true, message: 'digite a sua senha.' }]}
                >
                    <Input.Password className="form-input" placeholder="Digite a sua senha" />
                </Form.Item>

                <Form.Item>
                    <div className="form-button-container">
                        <Button type="default" htmlType="submit">
                            Cadastre-se
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AppLoginForm;