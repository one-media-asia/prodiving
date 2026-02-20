import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, BookOpen, Target, Award, MapPin } from "lucide-react";

const DivemasterPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Professional Course
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                PADI Divemaster
              </h1>
              <h2 className="text-3xl font-semibold text-ocean-700 mb-8">
                Become a PADI Divemaster on Koh Tao
              </h2>
              <p className="text-xl text-ocean-700 mb-8 max-w-3xl mx-auto">
                Do you love scuba diving? Would you like to share your passion, become a mentor
                and inspire others? Are you looking for a personal development activity that involves team work,
                leadership, self-discovery, in an amazing tropical location with new friends from all around the world?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 3-8 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">฿35,000 per person</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Book This Course
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Explore Your Passion as a PADI Divemaster on Koh Tao
              </h2>
              <div className="prose prose-lg max-w-none text-ocean-700 mb-12">
                <p className="mb-6">
                  Our PADI Divemaster course is the most popular professional level, recreational diver training course in the world and your first step onto the PADI Professional ladder.
                </p>
                <p className="mb-6">
                  You will gain knowledge, supervisory, leadership skills and the management abilities necessary to organize diving activities for others.
                </p>
                <p className="mb-6">
                  You will fine tune your dive skills so you can hover like a fish. You will sharpen your rescue skills enabling you to anticipate and solve problems and manage emergency situations.
                </p>
                <p className="mb-6">
                  Koh Tao is the perfect location to complete the PADI Divemaster course. The island has great dive sites, diving all year round, a laid-back island vibe within a vibrant social scene – the entire island lives and breathes scuba diving.
                </p>
                <p className="mb-6">
                  Become a part of the Koh Tao community and take the next step as a diver and become a PADI diving professional.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-ocean-900 mb-6">A Serious Lifestyle Change</h3>
              <div className="bg-ocean-50 p-6 rounded-lg mb-12">
                <p className="text-ocean-700">
                  Become a PADI Divemaster and learn what it takes to become an accomplished dive leader and immerse yourself into a whole new world. By mastering advanced rescue techniques, deep-dive logistics, and environmental stewardship, you will bridge the gap between being a recreational enthusiast and a respected dive professional, gaining the skills and confidence to inspire others as you transform the ocean into your official office.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-ocean-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Included in Divemaster Course
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Course Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Lots of real-life experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Flexible schedule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Rental of all scuba equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>FREE use of Dive Computer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Log book</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Pro Diving Customer Promise</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Be Rescue Diver or equivalent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Hold a recognized First Aid and CPR certificate valid within the last 24 months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>18 years of age or older</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Have recent diving experience – we recommend completing a scuba review if you have not dived for 12 months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Logged a minimum of 40 dives to start the course</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Medically fit to dive and cleared for diving by a physician within the last 12 months</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Koh Tao PADI Divemaster Course Candidate Information
              </h2>
              <p className="text-lg text-ocean-700 mb-12 text-center">
                The course consists of three sections; Knowledge Development, Water skills Development and Practical Application.
              </p>

              {/* Knowledge Development */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-ocean-600" />
                    Divemaster Knowledge Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The all new PADI Divemaster e-Learning will cover the following subjects:</p>
                  <ul className="space-y-2 mb-4">
                    <li>• The role and characteristics of the PADI Divemaster</li>
                    <li>• Supervising diving activities</li>
                    <li>• Assisting with student divers</li>
                    <li>• Diver Safety & Risk Management</li>
                    <li>• Divemaster conducted programs</li>
                    <li>• Specialized skills and activities</li>
                    <li>• The business of diving and your career</li>
                    <li>• Awareness of the dive environment</li>
                    <li>• Dive theory review</li>
                  </ul>
                  <p>The Divemaster video is integrated within the online study materials and each section will finish with a knowledge review.</p>
                </CardContent>
              </Card>

              {/* Water Skills Development */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-ocean-600" />
                    Divemaster Water Skills Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Water skills exercises 1-4 (400 & 800 metre swim, 15 minute float, 100 metre diver tow)</li>
                    <li>• Equipment Exchange</li>
                    <li>• Diver rescue assessment</li>
                    <li>• Dive skills circuit (24 skill circuit)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Practical Application */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-ocean-600" />
                    Divemaster Practical Application
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The practical application section of your Divemaster course includes a number of in-water workshops, scenarios and assessments.</p>

                  <h4 className="font-semibold mb-2">Divemaster Practical Skills</h4>
                  <ul className="space-y-1 mb-4">
                    <li>• 1 – Dive site set up and management</li>
                    <li>• 2 – Mapping Project</li>
                    <li>• 3 – Dive briefing workshops</li>
                    <li>• 4 – Search & Recovery scenario</li>
                    <li>• 5 – Deep dive scenario</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Divemaster Conducted Programs Workshops</h4>
                  <ul className="space-y-1 mb-4">
                    <li>• 1 – Reactivate Program</li>
                    <li>• 2 – Skin Diver & Snorkeling supervisor</li>
                    <li>• 3 – Discover Scuba Diver program in confined water</li>
                    <li>• 4 – Discover Scuba Diver program – additional Open Water diver</li>
                    <li>• 5 – Discover Local Diving in Open Water</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Divemaster Practical Assessments</h4>
                  <ul className="space-y-1">
                    <li>• 1 – Open Water diver students in confined water</li>
                    <li>• 2 – Open Water diver students in Open Water</li>
                    <li>• 3 – Continuing Education students in Open Water</li>
                    <li>• 4 – Certified Diver in Open Water</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Professionalism Criteria */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Divemaster Professionalism Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">You are evaluated on your professionalism and role model behaviour throughout the PADI Divemaster training.</p>
                  <p className="mb-4">You will be scored on a scale of 1-5 with 5 being excellent and 1 being unacceptable.</p>
                  <p className="mb-4">You are evaluated on the following criteria and to successfully complete the professionalism section you must score at least a 3 in every area:</p>
                  <ul className="space-y-1">
                    <li>• Level of active, positive participation in the training session</li>
                    <li>• Ability to serve as a mentor to student divers</li>
                    <li>• Willingness to follow directions</li>
                    <li>• Positive attitude and demeanor towards student divers, certified divers and staff</li>
                    <li>• Positive attitude and practice towards caring for the environment</li>
                    <li>• General understanding of the role of a PADI Divemaster</li>
                    <li>• Appearance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Cost */}
        <section className="py-20 bg-ocean-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                PADI Divemaster Course Cost: 35,000 baht
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Costs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• PADI Divemaster Application Fee: $AUS 286</li>
                      <li>• PADI Divemaster Materials – 8,000 baht (Divemaster Digital Crew Pack)</li>
                      <li>• Insurance: 5,000 Thai Baht</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Equipment Package (5,000 baht)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Blank slate & pencil</li>
                      <li>• Compass</li>
                      <li>• Delayed surface marker buoy (DSMB) & basic finger spool</li>
                      <li>• Whistle</li>
                      <li>• Rescue breathing mask</li>
                      <li>• Cutting tool</li>
                      <li>• Pro Diving rash guard</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Book Your Divemaster Course
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How long does the PADI Divemaster course take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The PADI Divemaster course takes a minimum time of 3 weeks to complete. On average most candidates will complete the course in about 4 weeks. The course is performance based rather than time based and ultimately it all depends on how relaxed or intense you want your course to be.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What are the minimum requirements to start a PADI Divemaster course?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>To enroll on our PADI Divemaster course you must: Be Rescue Diver or equivalent, Hold a recognized First Aid and CPR certificate valid within the last 24 months, 18 years of age or older, Have recent diving experience, Logged a minimum of 40 dives to start the course, Medically fit to dive.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Do I need to buy equipment for the PADI Divemaster course?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>All scuba equipment is provided for rental during the course. However, you will need to purchase the PADI Divemaster materials package and equipment package as listed above.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Is it easy to find work as a PADI Divemaster on Koh Tao?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, Koh Tao has a thriving diving industry with many dive centers always looking for qualified Divemasters. After completing your course, you can work as a Divemaster at various dive centers on the island.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DivemasterPage;