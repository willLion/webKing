<template>
    <div>
        <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
        >
            <a-form-item ref="userName" label="账号" name="userName">
                <a-input v-model:value="formState.userName"/>
            </a-form-item>
            <a-form-item ref="password" label="密码" name="password">
                <a-input v-model:value="formState.password"/>
            </a-form-item>
            <a-form-item ref="code" label="验证码" name="code">
                <a-input v-model:value="formState.code"/>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">登 录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup lang="ts">
import {ValidateErrorEntity} from 'ant-design-vue/es/form/interface';
import {LoginFormType} from '@/type/user'
import {getCodeApi} from "../../api/user.ts";


const formRef = ref();
const formState: UnwrapRef<LoginFormType> = reactive({
    userName: '',
    password: '',
    code: '',
    uuid: '',
});
const rules = {
    userName: [{required: true, message: '请输入账号', trigger: 'blur'}],
    code: [{required: true, message: '请输入验证码', trigger: 'blur'}],
    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
};
const onSubmit = () => {
    formRef.value
        .validate()
        .then(() => {
            console.log('values', formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<LoginFormType>) => {
            console.log('error', error);
        });
};
const resetForm = () => {
    formRef.value.resetFields();
};

const getCodeImg = async () => {
    const res_code = await getCodeApi()
    console.log('res_code', res_code)
}


onMounted(() => {
    console.log(111)
    getCodeImg()
})
</script>

