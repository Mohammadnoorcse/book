import React, { useState } from 'react'

const Account = () => {
    const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className="w-full flex  flex-col gap-4 ">
      {/* a-1 */}
      <div className="flex gap-8 items-center">
        <span className="text-[20px]">Personal Information</span>
        <span
          className={
            isDisabled ? "text-[16px] text-[#0397d3] cursor-pointer" : "hidden"
          }
          onClick={() => setIsDisabled(false)}
        >
          Change Information
        </span>
      </div>
      <div className="border"></div>
      {/* a-2 */}
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[16px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            disabled={isDisabled}
            placeholder="Aminur"
            className={
              isDisabled
                ? "w-[20rem] account-input h-[3rem] p-3 bg-[#f9f9f9] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
                : "w-[20rem] account-input h-[3rem] p-3 bg-[#fff] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-[16px]">
            Your Date of Birth
          </label>
          <input
            type="date"
            name="date"
            disabled={isDisabled}
            className={
              isDisabled
                ? "w-[20rem] account-input h-[3rem] p-3 bg-[#f9f9f9] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
                : "w-[20rem] account-input h-[3rem] p-3 bg-[#fff] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="gender" className="text-[16px]">
            Gender
          </label>
          <div className="flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              {isDisabled ? (
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  disabled={isDisabled}
                  checked
                />
              ) : (
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  disabled={isDisabled}
                />
              )}
              <label htmlFor="gender" className="text-sm">
                Male
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                disabled={isDisabled}
              />
              <label htmlFor="gender" className="text-sm">
                FeMale
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mobaile" className="text-[16px]">
            Mobile number
          </label>
          <input
            type="tel"
            name="mobile"
            disabled={isDisabled}
            placeholder="01775296704"
            className={
              isDisabled
                ? "w-[20rem] account-input h-[3rem] p-3 bg-[#f9f9f9] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
                : "w-[20rem] account-input h-[3rem] p-3 bg-[#fff] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[16px]">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            disabled={isDisabled}
            placeholder="mohammadnoorcse@gmail.com"
            className={
              isDisabled
                ? "w-[20rem] account-input h-[3rem] p-3 bg-[#f9f9f9] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
                : "w-[20rem] account-input h-[3rem] p-3 bg-[#fff] border border-[#ced4da] text-[#495057] text-[1rem] outline-none rounded"
            }
          />
        </div>
        <button
          className={
            isDisabled
              ? "hidden"
              : "w-[5rem] h-[2.2rem] rounded bg-[#3bd257] text-[18px] text-white font-medium"
          }
        >
          Save
        </button>
      </form>
      {/* a-3 */}
    </div>
  );
}

export default Account