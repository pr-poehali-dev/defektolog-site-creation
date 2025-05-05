
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface TypeItemProps {
  id: string;
  title: string;
  description: string;
  tasks?: string[];
  info?: string;
  imageUrl: string;
  imageAlt: string;
}

const TypeItem: React.FC<TypeItemProps> = ({
  id,
  title,
  description,
  tasks = [],
  info,
  imageUrl,
  imageAlt,
}) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-xl font-semibold">{title}</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <p className="mb-3">
              <strong>{title}</strong> {description}
            </p>
            {tasks.length > 0 && (
              <ul className="list-disc pl-6 mb-3">
                {tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            )}
            {info && <p>{info}</p>}
          </div>
          <div className="md:w-1/3">
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default TypeItem;
