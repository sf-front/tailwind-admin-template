import Badge from '@/components/Badge';
import Card from '@/components/Card';

export default function ExampleUIPage() {
  return (
    <main className="grid gap-10 grid-cols-1 lg:grid-cols-2">
      <Card title="Badge Example" className="space-x-2 col-span-2">
        <div className="grid gap-5">
          <div className="flex gap-2">
            <Badge text="Primary Badge" />
            <Badge text="Secondary Badge" variant="secondary" />
            <Badge text="Dark Badge" variant="dark" />
            <Badge text="Gray Badge" variant="gray" />
            <Badge text="Success Badge" variant="success" />
            <Badge text="Warning Badge" variant="warning" />
            <Badge text="Error Badge" variant="error" />
          </div>
          <div className="flex gap-2">
            <Badge text="Primary Badge" isOutlined />
            <Badge text="Secondary Badge" variant="secondary" isOutlined />
            <Badge text="Dark Badge" variant="dark" isOutlined />
            <Badge text="Gray Badge" variant="gray" isOutlined />
            <Badge text="Success Badge" variant="success" isOutlined />
            <Badge text="Warning Badge" variant="warning" isOutlined />
            <Badge text="Error Badge" variant="error" isOutlined />
          </div>
          <div className="flex gap-2">
            <Badge text="Primary Badge" isRound />
            <Badge text="Secondary Badge" variant="secondary" isRound />
            <Badge text="Dark Badge" variant="dark" isRound />
            <Badge text="Gray Badge" variant="gray" isRound />
            <Badge text="Success Badge" variant="success" isRound />
            <Badge text="Warning Badge" variant="warning" isRound />
            <Badge text="Error Badge" variant="error" isRound />
          </div>
          <div className="flex gap-2">
            <Badge text="Primary Badge" isRound isOutlined />
            <Badge text="Secondary Badge" variant="secondary" isRound isOutlined />
            <Badge text="Dark Badge" variant="dark" isRound isOutlined />
            <Badge text="Gray Badge" variant="gray" isRound isOutlined />
            <Badge text="Success Badge" variant="success" isRound isOutlined />
            <Badge text="Warning Badge" variant="warning" isRound isOutlined />
            <Badge text="Error Badge" variant="error" isRound isOutlined />
          </div>
        </div>
      </Card>
    </main>
  );
}
