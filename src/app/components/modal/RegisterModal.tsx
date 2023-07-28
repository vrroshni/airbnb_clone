'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Modal from './Modal'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';



const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isloading, setIsloading] = useState(false)
    const { register, handleSubmit, formState: {
        errors,
    } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsloading(true)
        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose()
            })
            .catch((error) => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsloading(false)
            })
    }
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title='Welcome to Airbnb'
                subtitle='Create an account'
            />
            <Input id="email"
                label='Email'
                disabled={isloading}
                register={register}
                errors={errors}
                required
            />
            <Input id="name"
                label='Name'
                disabled={isloading}
                register={register}
                errors={errors}
                required

            />
            <Input id="password"
                type='password'
                label='Password'
                disabled={isloading}
                register={register}
                errors={errors}
                required
            />
        </div>

    )
    const footerContent = (
        <div>hello</div>
    )

    return (

        <Modal
            disabled={isloading}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            title='Register'
            actionLabel='Continue'
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}



        />
    )
}

export default RegisterModal