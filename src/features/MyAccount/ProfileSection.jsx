'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


// Store
import { updateUserProfile } from '@/features/auth/authThunk';


export default function ProfileSection({ userData }) {
    const dispatch = useDispatch();
    const { isLoading, image } = useSelector((state) => state.auth)


    // console.log(userData);


    const [formData, setFormData] = useState({
        firstName: userData?.firstName || "",
        lastName: userData?.lastName || "",
        email: userData?.email || "",
        phoneNumber: userData?.phoneNumber || "",
        dateOfBirth: userData?.dateOfBirth || "",
        gender: userData?.gender || "",
    });

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[+]?[0-9]{10,15}$/;
        return phoneRegex.test(phoneNumber);
    };


    const handleDateChange = (newValue) => {
        setFormData({
            ...formData,
            dateOfBirth: newValue ? dayjs(newValue).toISOString() : "",
        });
    };

    const cancelFormData = () => {
        setFormData({
            firstName: userData?.firstName || "",
            lastName: userData?.lastName || "",
            email: userData?.email || "",
            phoneNumber: userData?.phoneNumber || "",
            dateOfBirth: userData?.dateOfBirth || "",
            gender: userData?.gender || "",
        });
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateFields = Object.keys(formData).reduce((accumulator, key) => {
            if (formData[key] !== "" && formData[key] !== null) {
                accumulator[key] = formData[key]
            }
            // console.log("ACC", accumulator);

            return accumulator
        }, {})

        if (updateFields.phoneNumber && !validatePhoneNumber(updateFields.phoneNumber)) {
            toast.error("Invalid phone number format");
            return;
        }

        const formPayload = new FormData();
        Object.keys(updateFields).forEach((keys) => {
            formPayload.append(keys, updateFields[keys])
        })

        if (image?.file) {
            formPayload.append("image", image.file)

        }
        console.log("FormPayLoad", formPayload);


        try {
            await dispatch(updateUserProfile(formPayload))
        } catch (error) {
            toast.error("Failed to update profile")
            console.error(error.message)

        }
    }

    return (
        <>
            <div className='grid p-6 grid-cols-12'>
                <form onSubmit={handleSubmit} className="md:col-start-1 col-start-1 md:col-end-8 col-end-12">
                    <h1 className="text-2xl font-semibold text-primaryMedium mb-8">
                        Personal Information
                    </h1>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-4 py-2 border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-4 py-2 border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2  border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="w-full px-4 py-2 border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />

                                {!validatePhoneNumber(formData.phoneNumber) && formData.phoneNumber && (
                                    <p className="text-red-500 text-sm">Invalid phone number</p>
                                )}
                            </div>
                            <div>


                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Date Of Birth
                                </label>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        slotProps={{
                                            textField: {
                                                InputProps: {
                                                    className:
                                                        "!w-[262px] !h-[42px] !min-w-full !border-none !rounded-lg !text-gray-500 hover:!outline-none hover:!border-none focus:!border-none focus:!outline-none !bg-white",
                                                    sx: {
                                                        "& .MuiOutlinedInput-root": {
                                                            border: "none",
                                                            "&:hover": {
                                                                border: "none",
                                                            },
                                                            "&.Mui-focused": {
                                                                border: "none",
                                                                outline: "none",
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        }}

                                        value={formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null}
                                        onChange={handleDateChange}
                                    />
                                </LocalizationProvider>

                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Gender
                            </label>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, gender: 'male' })}
                                    className={`
                flex-1 px-4 py-2 rounded-lg border transition-colors
                ${formData.gender === 'male'
                                            ? 'bg-primaryMedium border-primaryMedium text-white'
                                            : 'border-primaryMedium hover:text-white text-gray-400 hover:bg-primaryMedium'
                                        }
              `}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, gender: 'female' })}
                                    className={`
                flex-1 px-4 py-2 rounded-lg border transition-colors
                ${formData.gender === 'female'
                                            ? 'bg-primaryMedium border-primaryMedium text-white'
                                            : 'border-primaryMedium text-gray-400 hover:bg-primaryMedium hover:text-white'
                                        }
              `}
                                >
                                    Female
                                </button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">
                            In order to access some features of the Service, you will have fill out
                            your account details.
                        </p>


                        <div className="flex gap-4">
                            <button
                                onClick={cancelFormData}
                                type="button"
                                className="px-10 py-2 border border-teal-500 text-teal-500 rounded-sm hover:bg-primaryMedium hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-10 py-2 bg-primaryMedium text-white rounded-sm hover:bg-primaryLight transition-colors"
                            >
                                {isLoading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

