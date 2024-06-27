import Button from '@/components/Button';
import Card from '@/components/Card';
import { useToastSetState } from '@/recoil/toastState';

export default function ExampleFeedbackPage() {
  // recoil
  const setToastState = useToastSetState();

  return (
    <main className="grid gap-10 grid-cols-1 lg:grid-cols-2">
      <Card title="Toast Example" className="grid gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setToastState({ isOpen: true, title: '테스트', variant: 'primary' });
          }}
        >
          버튼
        </Button>
        <Button
          type="button"
          onClick={() => {
            setToastState({ isOpen: true, title: '테스트', variant: 'success' });
          }}
        >
          버튼
        </Button>
        <Button
          type="button"
          variant="error"
          onClick={() => {
            setToastState({ isOpen: true, title: '테스트', variant: 'error' });
          }}
        >
          버튼
        </Button>
      </Card>
    </main>
  );
}
