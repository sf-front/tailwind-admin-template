import Card from '@/components/Card';
import Checkbox from '@/components/Form/CheckBox';
import Input from '@/components/Form/Input';
import RadioButton from '@/components/Form/RadioButton';
import SelectBox from '@/components/Form/SelectBox';
import Textarea from '@/components/Form/TextArea';
import Toggle from '@/components/Form/Toggle';
import { useState } from 'react';

export default function ExampleFormPage() {
  // useState
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadioOption, setSelectedRadioOption] = useState('option1');
  const [textInput, setTextInput] = useState('');
  const [text, setText] = useState('');
  const [isToggleChecked, setIsToggleChecked] = useState(false);

  return (
    <main className="grid gap-10 grid-cols-1 lg:grid-cols-2">
      <Card title="SelectBox Example">
        <SelectBox
          label="Select an Option"
          options={[
            { label: 'Disabled Option', value: 'option1', disabled: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
            { label: 'Option 4', value: 'option4' },
          ]}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </Card>

      <Card title="Checkbox Example">
        <Checkbox label="I agree to the terms and conditions" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      </Card>

      <Card title="RadioButton Example">
        <RadioButton
          label="Option 1"
          name="options"
          value="option1"
          checked={selectedRadioOption === 'option1'}
          onChange={(e) => setSelectedRadioOption(e.target.value)}
        />
        <RadioButton
          label="Option 2"
          name="options"
          value="option2"
          checked={selectedRadioOption === 'option2'}
          onChange={(e) => setSelectedRadioOption(e.target.value)}
        />
        <RadioButton
          label="Option 3"
          name="options"
          value="option3"
          checked={selectedRadioOption === 'option3'}
          onChange={(e) => setSelectedRadioOption(e.target.value)}
        />
      </Card>

      <Card title="Input Example">
        <Input label="Text Input" type="text" placeholder="Enter some text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
      </Card>

      <Card title="TextArea Example">
        <Textarea label="Your Message" placeholder="Type your message here..." value={text} onChange={(e) => setText(e.target.value)} />
      </Card>

      <Card title="Toggle Example">
        <Toggle
          isChcked={isToggleChecked}
          label="토글"
          onChange={(_isChcked) => {
            setIsToggleChecked(_isChcked);
          }}
        ></Toggle>
      </Card>
    </main>
  );
}
