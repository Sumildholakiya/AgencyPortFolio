import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const PortfolioItem = ({
  title,
  description,
  imageUrl,
  category,
}: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-lg font-semibold">{category}</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <span className="text-sm text-muted-foreground">{category}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
