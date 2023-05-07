import { useState } from 'react'
import { Formik, Form } from 'formik'

import FormController from './components/FormController'
import Button from './components/Button'

import { towerOptions, floorOptions, roomOptions, timeOptions } from './utils/costants'
import { validateSelectTower, validateSelectFloor, validateSelectRoom } from './utils/validators'

function App() {

  const [isDisabled, setIsDisabled] = useState(false)

  const initialValues = {
    selectedTower: '',
    selectedFloor: '',
    selectedRoom: '',
    meetDate: null,
    selectedTime: '',
    comment: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, {resetForm}) => {
        console.log(JSON.stringify(values))
        resetForm()
      }}
      validateOnMount
    >
      {({ errors, touched, values, resetForm, isValid }) => (
        <Form noValidate>
          <main className="container mx-auto max-w-full min-h-screen flex flex-col items-center px-32 py-16 font-sans bg-white">
            <h1 className="mb-16 font-normal text-h1 text-black">Пожалуйста, заполните форму:</h1>
              <div className="w-1024 mb-24 flex justify-between">
                <div className="flex flex-col relative">
                  <FormController
                    controller="select"
                    label="Выберите башню"
                    name="selectedTower"
                    options={towerOptions}
                    value={values.selectedTower}
                    validate={validateSelectTower}
                    required
                  />
                  {errors.selectedTower && touched.selectedTower && (
                    <span className="font-normal text-p text-red absolute top-20 left-1">
                      {errors.selectedTower}
                    </span>
                  )}
                </div>
                <div className="flex flex-col relative">
                  <FormController
                    controller="select"
                    label="Выберите этаж"
                    name="selectedFloor"
                    options={floorOptions}
                    value={values.selectedFloor}
                    validate={validateSelectFloor}
                    required
                  />
                  {errors.selectedFloor && touched.selectedFloor && (
                    <span className="font-normal text-p text-red absolute top-20 left-1">
                      {errors.selectedFloor}
                    </span>
                  )}
                </div>
                <div className="flex flex-col relative">
                  <FormController
                    controller="select"
                    label="Выберите переговорную"
                    name="selectedRoom"
                    options={roomOptions}
                    value={values.selectedRoom}
                    validate={validateSelectRoom}
                    required
                  />
                  {errors.selectedRoom && touched.selectedRoom && (
                    <span className="font-normal text-p text-red absolute top-20 left-1">
                      {errors.selectedRoom}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-768 mb-24 flex justify-between">
                <FormController
                  controller="date"
                  label="Выберите дату"
                  name="meetDate"
                  onDisabled={!isValid ? setIsDisabled(true) : setIsDisabled(false)}
                  isDisabled={isDisabled}
                />
                <FormController
                  controller="select"
                  label="Выберите удобное время"
                  name="selectedTime"
                  options={timeOptions}
                  onDisabled={!isValid ? setIsDisabled(true) : setIsDisabled(false)}
                  isDisabled={isDisabled}
                />
              </div>
              <div className="mb-24">
                <FormController
                  controller="textarea"
                  label="Напишите комментарий"
                  name="comment"
                />
              </div>
              <div className="w-768 flex justify-between">
                <Button
                  variant="submit"
                  handler="submit"
                  type="submit"
                  text="Отправить"
                  onDisabled={!isValid ? setIsDisabled(true) : setIsDisabled(false)}
                  isDisabled={isDisabled}
                />
                <Button
                  variant="reset"
                  handler="reset"
                  type="reset"
                  text="Очистить"
                  onResetForm={resetForm}
                />
              </div>
          </main>
        </Form>
      )}
    </Formik>
  )
}

export default App
