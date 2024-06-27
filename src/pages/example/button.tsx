import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ExampleButtonPage() {
  return (
    <main className="grid gap-10 grid-cols-1 lg:grid-cols-2">
      <Card title="Button Example" className="col-span-2">
        <div className="grid gap-5">
          <p>Large</p>
          <div className="flex gap-2">
            <Button variant="primary" size="large">
              Primary Button
            </Button>
            <Button variant="secondary" size="large">
              Secondary Button
            </Button>
            <Button variant="dark" size="large">
              Dark Button
            </Button>
            <Button variant="gray" size="large">
              Gray Button
            </Button>
            <Button variant="success" size="large">
              Success Button
            </Button>
            <Button variant="warning" size="large">
              Warning Button
            </Button>
            <Button variant="error" size="large">
              Error Button
            </Button>
          </div>
          <p>Medium</p>
          <div className="flex gap-2">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="dark">Dark Button</Button>
            <Button variant="gray">Gray Button</Button>
            <Button variant="success">Success Button</Button>
            <Button variant="warning">Warning Button</Button>
            <Button variant="error">Error Button</Button>
          </div>
          <p>small</p>
          <div className="flex gap-2">
            <Button variant="primary" size="small">
              Primary Button
            </Button>
            <Button variant="secondary" size="small">
              Secondary Button
            </Button>
            <Button variant="dark" size="small">
              Dark Button
            </Button>
            <Button variant="gray" size="small">
              Gray Button
            </Button>
            <Button variant="success" size="small">
              Success Button
            </Button>
            <Button variant="warning" size="small">
              Warning Button
            </Button>
            <Button variant="error" size="small">
              Error Button
            </Button>
          </div>
          <p>outlined</p>
          <div className="flex gap-2">
            <Button variant="primary" isOutlined>
              Primary Button
            </Button>
            <Button variant="secondary" isOutlined>
              Secondary Button
            </Button>
            <Button variant="dark" isOutlined>
              Dark Button
            </Button>
            <Button variant="gray" isOutlined>
              Gray Button
            </Button>
            <Button variant="success" isOutlined>
              Success Button
            </Button>
            <Button variant="warning" isOutlined>
              Warning Button
            </Button>
            <Button variant="error" isOutlined>
              Error Button
            </Button>
          </div>
          <p>disabled</p>
          <div className="flex gap-2">
            <Button variant="primary" disabled>
              Primary Button
            </Button>
            <Button variant="secondary" disabled>
              Secondary Button
            </Button>
            <Button variant="dark" disabled>
              Dark Button
            </Button>
            <Button variant="gray" disabled>
              Gray Button
            </Button>
            <Button variant="success" disabled>
              Success Button
            </Button>
            <Button variant="warning" disabled>
              Warning Button
            </Button>
            <Button variant="error" disabled>
              Error Button
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
