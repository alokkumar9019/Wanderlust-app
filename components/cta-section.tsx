import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Start Your Adventure?</h2>
        <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
          Join thousands of travelers who've discovered their perfect destinations with Wanderlust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Enter your email"
              className="pl-10 h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
          </div>
          <Button size="lg" variant="secondary" className="h-12">
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/70">Free to join. Start planning your dream trip today.</p>
      </div>
    </section>
  )
}
