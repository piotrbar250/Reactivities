using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                Activity activity = await context.Activities.FindAsync(request.Id);
                context.Remove(activity);
                await context.SaveChangesAsync();
            }
        }
    }
}